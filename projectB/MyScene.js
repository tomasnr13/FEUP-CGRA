import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader} from "../lib/CGF.js";
import { MyCubeMap } from "./MyCubeMap.js";
import { MyMovingFish } from "./MyMovingFish.js";
import { MySeaFloor } from "./MySeaFloor.js";
import { MyWaterSurface } from "./MyWaterSurface.js";
import { MyRockSet } from "./MyRockSet.js";
import { MySeaweedSet } from "./MySeaweedSet.js";
import { MyPillarSet } from "./MyPillarSet.js";
import { CGFcamera2 } from "./CGFcamera2.js";

/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor(){
        super();
    }
    
    init(application) {
        /*--------------------INITIALIZING SCENE--------------------*/

        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        /*-------------------END INITIALIZING SCENE-------------------*/

        /*--------------------------TEXTURES--------------------------*/

        //cube map textures
        this.textureXTop =  'images/underwater_cubemap/right.jpg';
        this.textureYTop =  'images/underwater_cubemap/top.jpg';
        this.textureZTop =  'images/underwater_cubemap/front.jpg';
        this.textureXBottom =  'images/underwater_cubemap/left.jpg';
        this.textureYBottom =  'images/underwater_cubemap/bottom.jpg';
        this.textureZBottom =  'images/underwater_cubemap/back.jpg';

        //other elements
        this.scales = 'textures/scales.jpg';
        this.ccounter = 0;
        this.nestpositions = [[-8.5,-12.5],[-13,-7],[-19,-12],[-14,-18.5],[-9.5,-10],[-11.5,-8],[-9.5,-16],[-11.5,-18],[-16,-7],[-18,-9],[-17,-17.5],[-18.5,-15]];
        this.actualposition = 0;
        this.throwrock=false;
        this.startcount=false;

        /*------------------------END TEXTURES-------------------------*/

        /*------------------------SCENE OBJECTS------------------------*/
        
        this.axis = new CGFaxis(this);
        this.cubeMap = new MyCubeMap(this, this.textureXTop, this.textureYTop, this.textureZTop, this.textureXBottom, this.textureYBottom, this.textureZBottom);
        this.floor = new MySeaFloor(this, 20, 50, 50, 1);
        this.watersurface = new MyWaterSurface(this);
        this.fish = new MyMovingFish(this, this.scales, 0.3, 0,0,3);
        this.rockSet = new MyRockSet(this, 40);
        this.pillarSet = new MyPillarSet(this, 5, 12);
        this.seaweedSet = new MySeaweedSet(this, 16);
        /*----------------------END SCENE OBJECTS---------------------*/

		/*----------------------CREATING DEFAULT MATERIAL--------------------*/

        this.defaultAppearance = new CGFappearance(this);
		this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0, 0, 0, 1);
		this.defaultAppearance.setShininess(120);

        /*--------------------END CREATING DEFAULT MATERIAL------------------*/

        /*----------------OBJECTS CONNECTED TO INTERFACE--------------*/

        this.displayAxis = false;
        this.displayFish = true;
        this.fishScaleFactor = 1.0; 
        this.fishSpeedFactor = 1.0;  

        /*--------------END OBJECTS CONNECTED TO INTERFACE------------*/
    }

    initLights(){
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras(){
        this.camera = new CGFcamera2(1.7, 0.1, 500, vec3.fromValues(2, 2, 2), vec3.fromValues(0, 2, 0));
    }

    setDefaultAppearance(){
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        this.watersurface.update(t);
   
        this.fish.update(t);
        if(this.throwrock){
            if(this.startcount){
                this.t0 = t;
                this.startcount=false;
            }
            this.updatethrowrock((t-this.t0)/10000);
        }

        this.seaweedSet.update(t);
    }

	display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        /*--------------------DISPLAYING OBJECTS--------------------*/

        this.setActiveShader(this.defaultShader);

        //drawing axis
        if (this.displayAxis) this.axis.display();

        //drawing cube map
        this.pushMatrix();
        this.scale(50, 50, 50);
        this.cubeMap.display();
        this.popMatrix();

        //drawing rocks set
        this.rockSet.display();

        //drawing pillars
        this.pillarSet.display();

        //drawing fish
        this.pushMatrix();
        this.scale(this.fishScaleFactor, this.fishScaleFactor, this.fishScaleFactor);
        if(this.displayFish) this.fish.display();
        this.popMatrix();

        //drawing the sea floor
        this.floor.display();

        //drawing watersurface
        this.watersurface.display();

        //drawing seaweeds
        this.seaweedSet.display();
        
        /*------------------END DISPLAYING OBJECTS------------------*/
	}

    updatethrowrock(t){
        this.fish.rock.x = this.fish.rock.x + 2*Math.sin(this.rockangle)*t;
        this.fish.rock.z = this.fish.rock.z + 2*Math.cos(this.rockangle)*t;
        this.fish.rock.y = this.fish.rock.y-5*Math.pow(t,2);
        if(this.fish.rock.y<=0.25){
            this.fish.rock.y = 0.25;
            if((this.fish.rock.x > -20 && this.fish.rock.x < -9) && (this.fish.rock.z > -19 && this.fish.rock.z < -6)){
                this.fish.rock.x = this.nestpositions[this.actualposition][0];
                this.fish.rock.z = this.nestpositions[this.actualposition][1];
                this.fish.rock.innest = true;
                this.actualposition++;
            } 
            this.throwrock=false;             
        }
    }

    checkfishrocks(){
        if(this.fish.activeRock){
            if(this.fish.y==1){
                if((this.fish.rock.x > -20 && this.fish.rock.x < -9) && (this.fish.rock.z > -19 && this.fish.rock.z < -6)){
                    this.fish.activeRock = false;
                    this.fish.rock.y = 0.25;
                    this.fish.rock.x = this.nestpositions[this.actualposition][0];
                    this.fish.rock.z = this.nestpositions[this.actualposition][1];
                    this.fish.rock.innest = true;
                    this.actualposition++;
                }
            }
            else if(this.fish.y==5){
                this.throwrock = true;
                this.startcount =true;
                this.rockangle = this.fish.yy_angle;
                this.fish.activeRock = false;
            }
        }
        else{
            if(this.fish.y==1){
                for(var i = 0; i<this.rockSet.numRocks; i++){
                    if((this.distance(this.fish.x,this.rockSet.rocks[i].x,this.fish.y,this.rockSet.rocks[i].y,this.fish.z,this.rockSet.rocks[i].z) < 1.8) && !this.rockSet.rocks[i].innest){
                        this.fish.rock = this.rockSet.rocks[i];
                        this.fish.activeRock = true;
                    }
                }
            }
        }
    }

    distance(x1,x2,y1,y2,z1,z2){
        return (Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2)));
    }

    checkKeys(){
        this.ccounter++;
        var text="Keys pressed: ";
        var keysPressed=false;
    
        if (this.gui.isKeyPressed("KeyW")) {
                text+=" W ";
                keysPressed=true;
                this.fish.accelerate(0.01 * this.fishSpeedFactor);
        }
        if (this.gui.isKeyPressed("KeyS"))  {
                text+=" S ";
                keysPressed=true;
                this.fish.accelerate(-0.01 * this.fishSpeedFactor);
        }
        if (this.gui.isKeyPressed("KeyP"))  {
            text+=" P ";
            keysPressed=true;
            this.fish.updown(0.1);
        }
        if (this.gui.isKeyPressed("KeyL"))  {
            text+=" L ";
            keysPressed=true;
            this.fish.updown(-0.1);
        }
        if (this.gui.isKeyPressed("KeyA"))  {
            text+=" A ";
            keysPressed=true;
            this.fish.turn(0.1);
        }
        if (this.gui.isKeyPressed("KeyD"))  {
            text+=" D ";
            keysPressed=true;
            this.fish.turn(-0.1);
        }
        if (this.gui.isKeyPressed("KeyC"))  {
            text+=" C ";
            keysPressed=true;
            if(this.ccounter>10){
                this.checkfishrocks();
                this.ccounter=0;
            }
        }
        if(!this.gui.isKeyPressed("KeyA") && !this.gui.isKeyPressed("KeyS")) {
            this.fish.deaccelerate(0.05 * this.fishSpeedFactor);
        }
        if (this.gui.isKeyPressed("KeyR"))  {
            text+=" R ";
            keysPressed=true;
            this.fish.reset();
        }
      }
}