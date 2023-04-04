import {CGFobject, CGFappearance, CGFshader} from '../lib/CGF.js';
import { MyPyramid } from "./MyPyramid.js";

/**
 * MySeaweed
 * @constructor
 * @param scene - Reference to MyScene object
 */
 export class MySeaweed extends CGFobject {
	constructor(scene, maxNumWeeds, x, y, z) {
		super(scene);
        this.maxNumWeeds = maxNumWeeds;
        this.x = x;
        this.y = y;
        this.z = z;
        this.weeds = [];
        this.scaleOffsets = [];
        this.posOffsets = [];
        this.rotateOffsets = [];
        this.materials = [];
        this.materialRand = [];
        this.init();
    }

    init(){
        for(var i = 0; i < this.maxNumWeeds; i++){
            this.weeds.push(new MyPyramid(this.scene, 10, 10));
            var rand_pos = Math.random() * 0.5 + 0.1;

            this.scaleOffsets.push(0.2, Math.random() * 2 + 0.5, rand_pos);       
            this.posOffsets.push(rand_pos + 0.2, 0, 0);
            this.rotateOffsets.push(Math.PI / Math.random() * (2) + 2);
        }

        this.green =  0.25 + (0.7) * Math.random();
    }

    update(t){
        this.seaweedShader.setUniformsValues({ timeFactor: t / 500  % 100 });
    }

    display(){
        for(var i = 0; i < this.maxNumWeeds; i++){
            this.scene.pushMatrix();
            if(i % 4 == 0){
                this.scene.rotate(this.rotateOffsets[i] * 0.9, 0, 1, 0);
            }
            this.scene.translate(this.posOffsets[i * 3], this.posOffsets[i * 3 + 1], this.posOffsets[i * 3 + 2]);
            this.scene.scale(this.scaleOffsets[i * 3], this.scaleOffsets[i* 3 + 1], this.scaleOffsets[i * 3 + 2]);

            this.weeds[i].display();
            this.scene.popMatrix();
        }
    }

    getGreen(){
        return this.green;
    }
}