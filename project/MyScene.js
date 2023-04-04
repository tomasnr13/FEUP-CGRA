import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MyCubeMap } from "./MyCubeMap.js";
import { MySphere } from "./MySphere.js";
import { MyMovingObject  } from "./MyMovingObject.js";
import { MyCylinder } from "./MyCylinder.js";

/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor(){
        super();
    }
    
    init(application){
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


        /*--------------------SCENE OBJECTS--------------------*/

        this.axis = new CGFaxis(this);
        this.movingObject = new MyMovingObject(this);
        this.textureXTop =  'images/demo_cubemap/right.png';
        this.textureYTop =  'images/demo_cubemap/top.png';
        this.textureZTop =  'images/demo_cubemap/front.png';
        this.textureXBottom =  'images/demo_cubemap/left.png';
        this.textureYBottom =  'images/demo_cubemap/bottom.png';
        this.textureZBottom =  'images/demo_cubemap/back.png';
        this.textureXTop1 =  'images/test_cubemap/px.png';
        this.textureYTop1 =  'images/test_cubemap/py.png';
        this.textureZTop1 =  'images/test_cubemap/pz.png';
        this.textureXBottom1 =  'images/test_cubemap/nx.png';
        this.textureYBottom1 =  'images/test_cubemap/ny.png';
        this.textureZBottom1 =  'images/test_cubemap/nz.png';
        this.cubeMap = new MyCubeMap(this);
        this.cylinder = new MyCylinder(this, 30);
        this.sphere = new MySphere(this,30,30);

        /*------------------END SCENE OBJECTS-----------------*/


        /*------------------CREATING TEXTURES-----------------*/

        this.textureXTop_tex =  new CGFtexture(this, 'images/demo_cubemap/right.png');
        this.textureYTop_tex =  new CGFtexture(this,'images/demo_cubemap/top.png');
        this.textureZTop_tex =  new CGFtexture(this,'images/demo_cubemap/front.png');
        this.textureXBottom_tex =  new CGFtexture(this,'images/demo_cubemap/left.png');
        this.textureYBottom_tex =  new CGFtexture(this,'images/demo_cubemap/bottom.png');
        this.textureZBottom_tex =  new CGFtexture(this,'images/demo_cubemap/back.png');
        this.textureXTop1_tex =  new CGFtexture(this,'images/test_cubemap/px.png');
        this.textureYTop1_tex =  new CGFtexture(this,'images/test_cubemap/py.png');
        this.textureZTop1_tex =  new CGFtexture(this,'images/test_cubemap/pz.png');
        this.textureXBottom1_tex =  new CGFtexture(this,'images/test_cubemap/nx.png');
        this.textureYBottom1_tex =  new CGFtexture(this,'images/test_cubemap/ny.png');
        this.textureZBottom1_tex =  new CGFtexture(this,'images/test_cubemap/nz.png');

        /*----------------END CREATING TEXTURES---------------*/


        /*--------------------CREATING MATERIALS--------------------*/

        this.defaultAppearance = new CGFappearance(this);
		this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0,0,0,1);
		this.defaultAppearance.setShininess(120);

		this.sphereAppearance = new CGFappearance(this);
		this.sphereAppearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.sphereAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.sphereAppearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.sphereAppearance.setShininess(120);
        this.sphereAppearance.loadTexture('images/earth.jpg');

        //cubemap

        this.quadMaterialTop = new CGFappearance(this);
        this.quadMaterialTop.setAmbient(10, 10, 10, 10);
        this.quadMaterialTop.setDiffuse(0, 0, 0, 0);
        this.quadMaterialTop.setSpecular(0, 0, 0, 0);
        this.quadMaterialTop.setShininess(10.0);
        this.quadMaterialTop.loadTexture(this.textureYTop);

        this.quadMaterialFront = new CGFappearance(this);
        this.quadMaterialFront.setAmbient(10, 10, 10, 10);
        this.quadMaterialFront.setDiffuse(0, 0, 0, 0);
        this.quadMaterialFront.setSpecular(0, 0, 0, 0);
        this.quadMaterialFront.setShininess(10.0);
        this.quadMaterialFront.loadTexture(this.textureZTop);

        this.quadMaterialBack = new CGFappearance(this);
        this.quadMaterialBack.setAmbient(10, 10, 10, 10);
        this.quadMaterialBack.setDiffuse(0, 0, 0, 0);
        this.quadMaterialBack.setSpecular(0, 0, 0,0);
        this.quadMaterialBack.setShininess(10.0);
        this.quadMaterialBack.loadTexture(this.textureZBottom);

        this.quadMaterialLeft = new CGFappearance(this);
        this.quadMaterialLeft.setAmbient(10, 10, 10, 10);
        this.quadMaterialLeft.setDiffuse(0, 0, 0, 0);
        this.quadMaterialLeft.setSpecular(0, 0, 0,0);
        this.quadMaterialLeft.setShininess(10.0);
        this.quadMaterialLeft.loadTexture(this.textureXBottom);

        this.quadMaterialRight = new CGFappearance(this);
        this.quadMaterialRight.setAmbient(10, 10, 10, 10);
        this.quadMaterialRight.setDiffuse(0, 0, 0, 0);
        this.quadMaterialRight.setSpecular(0, 0, 0, 0);
        this.quadMaterialRight.setShininess(10.0);
        this.quadMaterialRight.loadTexture( this.textureXTop);

        this.quadMaterialBottom = new CGFappearance(this);
        this.quadMaterialBottom.setAmbient(10, 10, 10, 10);
        this.quadMaterialBottom.setDiffuse(0, 0, 0, 0);
        this.quadMaterialBottom.setSpecular(0, 0, 0, 0);
        this.quadMaterialBottom.setShininess(10.0);
        this.quadMaterialBottom.loadTexture( this.textureYBottom);

        /*------------------END CREATING MATERIALS------------------*/

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayArrow = false;
        this.displaySphere = false;
        this.displayCylinder = false;
        this.selectedTexture = 0;   
        this.scaleFactor = 1.0; //entre 0.5 e 3 
        this.speedFactor = 1.0;  //entre 0.1 e 3

        this.textures = [
            [this.textureXTop_tex,  this.textureYTop_tex,  this.textureZTop_tex, this.textureXBottom_tex, this.textureYBottom_tex, this.textureZBottom_tex],
            [this.textureXTop1_tex,  this.textureYTop1_tex,  this.textureZTop1_tex, this.textureXBottom1_tex, this.textureYBottom1_tex, this.textureZBottom1_tex]
          ];

        this.textureIds = {'Demo': 0, 'Test': 1};
    }

    initLights(){
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras(){
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
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
        //To be done...
        this.checkKeys();
    }

        //Function that resets selected texture in cubeMap
    updateAppliedTexture() {
        console.log(this.textures);
        this.quadMaterialTop.setTexture(this.textures[this.selectedTexture][1]);
        this.quadMaterialFront.setTexture(this.textures[this.selectedTexture][2]);
        this.quadMaterialBack.setTexture(this.textures[this.selectedTexture][5]);
        this.quadMaterialLeft.setTexture(this.textures[this.selectedTexture][3]);
        this.quadMaterialRight.setTexture(this.textures[this.selectedTexture][0]);
        this.quadMaterialBottom.setTexture(this.textures[this.selectedTexture][4]);
    }

    display(){
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

        //drawing axis
        if (this.displayAxis)
            this.axis.display();

        //drawing arrow
        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        if(this.displayArrow){
            this.defaultAppearance.apply();
            this.movingObject.display(this);
        }
        this.popMatrix();

        //drawing sphere
        if(this.displaySphere){
            this.sphereAppearance.apply();
            this.sphere.display(this);
        }

        //drawing cylinder
        if(this.displayCylinder){   
            //this.sphereAppearance.apply();
            this.cylinder.display();
        } 

        //drawing cube map
        this.pushMatrix();
        this.scale(50,50,50);
        this.cubeMap.display(this.quadMaterialTop, this.quadMaterialFront, this.quadMaterialBack, this.quadMaterialLeft, this.quadMaterialRight, this.quadMaterialBottom);
        this.popMatrix();

        /*------------------END DISPLAYING OBJECTS------------------*/
    }

    checkKeys(){
        var text="Keys pressed: ";
        var keysPressed=false;
    
        //key codes e.g. in https://keycode.info/
    
        if (this.gui.isKeyPressed("KeyW")) {
                text+=" W ";
                keysPressed=true;
                this.movingObject.accelerate(0.01 * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyS"))  {
                text+=" S ";
                keysPressed=true;
                this.movingObject.accelerate(-0.01 * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyA"))  {
            text+=" A ";
            keysPressed=true;
            this.movingObject.turn(0.1);
        }
        if (this.gui.isKeyPressed("KeyD"))  {
            text+=" D ";
            keysPressed=true;
            this.movingObject.turn(-0.1);
        }
        if(!this.gui.isKeyPressed("KeyA") && !this.gui.isKeyPressed("KeyS")) {
            this.movingObject.deaccelerate(0.005 * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyR"))  {
            text+=" R ";
            keysPressed=true;
            this.movingObject.reset();
        }
        this.movingObject.update();
    
        if (keysPressed)
                console.log(text);
      }
}