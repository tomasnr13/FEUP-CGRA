import {CGFobject} from '../lib/CGF.js';
import { MyPyramid } from './MyPyramid.js';
/**
 * MyMovingObject 
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyMovingObject  extends CGFobject {
	constructor(scene, yy_angle=0, vel = 0, x = 0, y = 0, z = 0) {
		super(scene);
        this.init(scene);
        this.yy_angle = yy_angle;
        this.vel = vel;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    init(scene){
        scene.pyramid = new MyPyramid(scene, 8);
    }

    display(scene){
        scene.pushMatrix();
        scene.translate(this.x, 0, this.z);
        scene.rotate(this.yy_angle , 0, 1, 0);
        scene.rotate(Math.PI / 2, 1, 0, 0);
        scene.translate(0, -0.5, 0);
        scene.pyramid.display();
        scene.popMatrix();
    }

    update(){
        this.z += this.vel*Math.cos(this.yy_angle);
        this.x += this.vel*Math.sin(this.yy_angle);
        //console.log(this.yy_angle);  
    }

    turn(val){
        this.yy_angle += val;
    }

    accelerate(val){
        this.vel+=val;
    }

    deaccelerate(val){
        if(this.vel>0){
            this.vel-=val;
        }
        if(this.vel<0){
            this.vel+=val;
        }
    }

    reset(){
        this.yy_angle=0;
        this.vel = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

}
