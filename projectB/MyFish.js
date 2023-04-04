import {CGFobject, CGFappearance, CGFshader} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import { MyTriangle } from "./MyTriangle.js";

/**
 * MyFish
 * @constructor
 * @param scene - Reference to MyScene object
 */
 export class MyFish extends CGFobject {
	constructor(scene, scales, headratio, red, green, blue) {
		super(scene);
        this.scales = scales;
        this.headratio = headratio;
        this.red= red;
        this.green = green
        this.blue = blue;
        this.init();
    }

    init(){
        this.lefteye = new MySphere(this.scene, 10, 10);
        this.righteye = new MySphere(this.scene, 10, 10);
        this.body = new MySphere(this.scene, 10, 10);
        this.tail = new MyTriangle(this.scene);
        this.leftfin = new MyTriangle(this.scene);
        this.rightfin = new MyTriangle(this.scene);
        this.dorsalfin = new MyTriangle(this.scene);

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(this.red, this.green, this.blue, 1);
        this.material.setDiffuse(0, 0, 0, 0);
        this.material.setSpecular(0, 0, 0, 0);
        this.material.setShininess(10.0);
        this.material.loadTexture(this.scales);

        this.materialeye = new CGFappearance(this.scene);
        this.materialeye.setAmbient(1, 1, 1, 1);
        this.materialeye.setDiffuse(1, 1, 1, 1);
        this.materialeye.setSpecular(1, 1, 1,1);
        this.materialeye.setShininess(10.0);
        this.materialeye.loadTexture('images/eye.jpg');

        this.fishShader = new CGFshader(this.scene.gl, "shaders/fishScales.vert", "shaders/fishScales.frag");
        this.fishShader.setUniformsValues({uSampler: 0, red : this.red, green : this.green, blue : this.blue, headratio : this.headratio});
    }

    display(leftr, rightr, tailr){
        this.scene.pushMatrix();
        this.scene.translate(-0.4,0.4,0.8);
        this.scene.scale(0.15,0.15,0.15);
        this.materialeye.apply();
        this.righteye.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.4,0.4,0.8);
        this.scene.scale(0.15,0.15,0.15);
        this.scene.rotate(Math.PI,0,1,0);
        this.materialeye.apply();
        this.lefteye.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -1.3);
        this.scene.rotate(tailr ,0, 1, 0);
        this.scene.translate(0, 0, -1);
        this.material.apply();
        this.tail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.7, -0.4, 0);
        this.scene.rotate(leftr+0.5 ,0, 0, 1);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,-0.2,0);
        this.scene.rotate(Math.PI/4 ,1, 0, 0);
        this.material.apply();
        this.leftfin.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7, -0.4, 0);
        this.scene.rotate(-rightr-0.5 ,0, 0, 1);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,-0.2,0);
        this.scene.rotate(Math.PI/4 ,1, 0, 0);
        this.material.apply();
        this.rightfin.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1, -0.3);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,0.3,0.7);
        this.scene.rotate(3*Math.PI/4 ,1, 0, 0);
        this.material.apply();
        this.dorsalfin.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.fishShader);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.7,1.3,1);
        this.material.apply();
        this.body.display();
        this.scene.popMatrix();
    }
}