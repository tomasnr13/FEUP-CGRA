import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.init(scene);
	}
	
    init(scene){
        scene.quad = new MyQuad(scene);
    }

    display(scene){
        scene.pushMatrix();
        scene.translate(0, 0, -0.5);
        scene.quad.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(0, 0, 0.5);
        scene.quad.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(0, 0.5, 0);
        scene.rotate(Math.PI / 2, 1, 0, 0);
        scene.quad.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(0, -0.5, 0);
        scene.rotate(Math.PI / 2, 1, 0, 0);
        scene.quad.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(-0.5, 0, 0);
        scene.rotate(Math.PI / 2, 0, 1, 0);
        scene.quad.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(0.5, 0, 0);
        scene.rotate(Math.PI / 2, 0, 1, 0);
        scene.quad.display();
        scene.popMatrix();
    }
}
