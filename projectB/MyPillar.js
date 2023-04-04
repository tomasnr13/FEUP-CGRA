import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyCylinder } from "./MyCylinder.js";

/**
 * MyPillar
 * @constructor
 * @param scene - Reference to MyScene object
 */
 export class MyPillar extends CGFobject {
	constructor(scene) {
		super(scene);
        this.init();
    }

    init(){
        this.pillar = new MyCylinder(this.scene, 20, 20);

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(10, 10, 10, 10);
        this.material.setDiffuse(0, 0, 0, 0);
        this.material.setSpecular(0, 0, 0,0);
        this.material.setShininess(10.0);
        this.material.loadTexture("textures/pillarWood.jpg");
    }

    display(){
        this.material.apply();
        this.pillar.display();
    }
}