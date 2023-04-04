import {CGFobject, CGFappearance, CGFshader} from '../lib/CGF.js';
import { MyPillar } from "./MyPillar.js";

/**
 * MyPillarSet
 * @constructor
 * @param scene - Reference to MyScene object
 */
 export class MyPillarSet  extends CGFobject {
	constructor(scene, pillarDist, pillarHeight) {
		super(scene);
        this.numPillars = 4;
        this.pillarDist = pillarDist;
        this.pillarHeight = pillarHeight;
        this.pillars = [];
        this.init();
    }

    init(){
        for(var i = 0; i < this.numPillars; i++){
            this.pillars.push(new MyPillar(this.scene));
        }
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.scale(1, this.pillarHeight, 1);
        this.scene.translate(0, 0, this.pillarDist);
        this.pillars[0].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.scale(1,  this.pillarHeight, 1);
        this.scene.translate(0, 0, -this.pillarDist);
        this.pillars[1].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.scale(1,  this.pillarHeight, 1);
        this.scene.translate(this.pillarDist, 0, this.pillarDist);
        this.pillars[2].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.scale(1,  this.pillarHeight, 1);
        this.scene.translate(this.pillarDist, 0, -this.pillarDist);
        this.pillars[3].display();
        this.scene.popMatrix();
    }
}