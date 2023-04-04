import {CGFobject, CGFappearance, CGFshader} from '../lib/CGF.js';
import { MySeaweed } from "./MySeaweed.js";

/**
 * MySeaweedSet
 * @constructor
 * @param scene - Reference to MyScene object
 */
 export class MySeaweedSet extends CGFobject {
	constructor(scene, numSeaweeds) {
		super(scene);
        this.numSeaweeds = numSeaweeds;
        this.seaweeds = [];
        this.cluster = Math.sqrt((50*50) / this.numSeaweeds);
        this.init();
    }

    randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    init(){
        var numberOfWeeds;

        this.seaweedShader = new CGFshader(this.scene.gl, "shaders/seaweed.vert", "shaders/seaweed.frag");
        
        for(var x = -25; x < 25; x+=this.cluster){
            for(var z = -25; z < 25; z+=this.cluster){
                var posx = this.randomBetween(x, x + this.cluster);
                var posz = this.randomBetween(z, z + this.cluster);
                numberOfWeeds = Math.random() * 2 + 2;

                this.seaweeds.push(new MySeaweed(this.scene, numberOfWeeds, posx, 2, posz));
            }
        } 
        this.t = 0;  
    }

    update(t){
        this.t =  t / 500  % 100;  
    }

    display(){
        this.scene.setActiveShader(this.seaweedShader);
        for(var i = 0; i < this.numSeaweeds; i++){
            this.seaweedShader.setUniformsValues({timeFactor: this.t, green: this.seaweeds[i].getGreen()})
            this.scene.pushMatrix();
            this.scene.translate(0, -2, 0);
            this.scene.translate(this.seaweeds[i].x, this.seaweeds[i].y, this.seaweeds[i].z);
            this.seaweeds[i].display();
            this.scene.popMatrix();
        }
    }
}