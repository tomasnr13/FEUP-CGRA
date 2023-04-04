import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyRock } from "./MyRock.js";

/**
 * MyRockSet
 * @constructor
 * @param scene - Reference to MyScene object
 */
 export class MyRockSet extends CGFobject {
	constructor(scene, numRocks) {
		super(scene);
        this.numRocks = numRocks;
        this.rocks = []
        this.cluster = Math.sqrt((50*50) / this.numRocks);
        console.log(this.numRocks);
        this.init();
    }

    randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    init(){
        for(var x = -25; x < 25; x+=this.cluster){
            for(var z = -25; z < 25; z+=this.cluster){
                var posx = this.randomBetween(x, x + this.cluster);
                var posz = this.randomBetween(z, z + this.cluster);
                var offsetd=Math.random()+0.2;
                var offsetr=Math.random()*2*Math.PI;
                if(x > 20 || z > 20){
                    this.rocks.push(new MyRock(this.scene, 10, 10, 0, 10, posx - 5, 0, posz - 5, offsetd,offsetr));
                }
                else{
                    this.rocks.push(new MyRock(this.scene, 10, 10, 0, 10, posx, 0, posz, offsetd,offsetr));
                }
            }
        }
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.5, 0.5, 0.5, 1);
        this.material.setDiffuse(0.14, 0.15, 0.16, 1);
        this.material.setSpecular(0.14, 0.15, 0, 1);
        this.material.setShininess(10.0);
    }

    display(){
        for(var i = 0; i < this.numRocks; i++){
            this.scene.pushMatrix();
            this.scene.translate(this.rocks[i].x, this.rocks[i].y, this.rocks[i].z);
            this.scene.rotate(this.rocks[i].rotation, 0,1,0);
            this.scene.scale(0.2, 0.2, 0.2);
            this.scene.scale(1, this.rocks[i].deformation, 1);
            this.material.apply();
            this.rocks[i].display();
            this.scene.popMatrix();
        }
    }
}