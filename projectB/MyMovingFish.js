import {CGFobject, CGFappearance} from '../lib/CGF.js';
import {MyFish} from "./MyFish.js";
import {MyRock} from "./MyRock.js";

/**
 * MyMovingFish
 * 
 * @constructor
 * @param scene - Reference to MyScene object
 * @param yy_angle - Angle between the object and the y axys
 * @param vel - speed at wich the fish moves
 * @param x - fish's x position
 * @param y - fish's y position
 * @param z - fish's z position
 */
 export class MyMovingFish  extends CGFobject {
	constructor(scene, scales, headratio, red, green, blue) {
		super(scene);
        this.scales = scales;
        this.headratio = headratio;
        this.yy_angle = 0;
        this.vel = 0;
        this.x = 0; 
        this.y = 3;
        this.z = 0;
        this.leftr=0;
        this.rightr=0;
        this.tailr=0;
        this.turnr = false;
        this.turnl = false;
        this.red= red;
        this.green = green
        this.blue = blue;
        this.activeRock = false;
        this.rock;
        this.init();
    }

    init(){
        this.fish = new MyFish(this.scene, this.scales, this.headratio, this.red, this.green, this.blue);
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.yy_angle , 0, 1, 0);
        this.scene.scale(0.5,0.5,0.5);
        this.fish.display(this.leftr,this.rightr,this.tailr);
        this.scene.popMatrix();
    }

    update(t){
        this.z += this.vel*Math.cos(this.yy_angle);
        this.x += this.vel*Math.sin(this.yy_angle);
        if(this.z > 25){
            this.z = 25;
            this.vel = 0.3;
        }
        if(this.x > 25){
            this.x = 25;
            this.vel = 0.3;
        }
        if(this.z < -25){
            this.z = -25;
            this.vel = 0.3;
        }
        if(this.x < -25){
            this.x = -25;
            this.vel = 0.3;
        }

        /*
            o código comentado leftr,rightr,tailr tentou ser usado mas o movimento não corresponde ao esperado
            estas funções substituiriam as linhas de codigos seguintes dentro do bloco
        */
        if(this.turnr==false){
            //this.leftr = 0.4*Math.sin((0.0002*Math.abs(this.vel)+0.005)*t);
            if(Math.abs(this.vel)<0.02){
                this.leftr = 0.4*Math.sin(0.005*t);
            }
            else{
                this.leftr = 3*this.vel*Math.sin(t/50);
            }
        }
        else{
            this.leftr = 0;
        }
        if(this.turnl==false){
            //this.rightr = 0.4*Math.sin((0.0002*Math.abs(this.vel)+0.005)*t);
            if(Math.abs(this.vel)<0.02){
                this.rightr = 0.4*Math.sin(0.005*t);
            }
            else{
                this.rightr = 3*this.vel*Math.sin(t/50);
            }
        }
        else{
            this.rightr = 0;
        }

        //this.tailr = 0.4*Math.cos((0.0002*Math.abs(this.vel)+0.005)*t);
        if(Math.abs(this.vel)<0.02){
            this.tailr = 0.4*Math.cos(0.005*t);
        }
        else{
            this.tailr = 2*this.vel*Math.cos(0.015*t);
        }
        if(this.activeRock){  
            this.rock.x = this.x + Math.sin(this.yy_angle);
            this.rock.y = this.y-0.3;
            this.rock.z = this.z + Math.cos(this.yy_angle);
        }
    }

    turn(val){
        this.yy_angle += val;
        if(val>0){
            this.turnr = true;
        }
        else{
            this.turnl = true;
        }
    }

    accelerate(val){
        this.turnr = false;
        this.turnl = false;
        this.vel+=val;
    }

    deaccelerate(val){
        if(this.vel>0){
            this.vel=this.vel - (val*this.vel);
        }
        else if(this.vel<0){
            this.vel=this.vel + (val*this.vel);
        }
    }

    updown(val){
        this.y += val;
        if(this.y>5){
            this.y=5;
        }
        if(this.y<1){
            this.y=1;
        }
    }

    reset(){
        this.yy_angle=0;
        this.vel = 0;
        this.x = 0;
        this.y = 3;
        this.z = 0;
        if(this.activeRock){
            this.rock.y=0.25;
            this.rock.x = Math.random()*50 -25;
            this.rock.z = Math.random()*50 -25;
        }
        this.activeRock=false;
    }
}