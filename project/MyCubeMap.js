import {CGFobject , CGFappearance, CGFtexture} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.init(scene);
	}
	
    init(scene){
        this.quad = new MyQuad(scene);
    }

    display(quadMaterialTop, quadMaterialFront, quadMaterialBack, quadMaterialLeft, quadMaterialRight, quadMaterialBottom){
        //z+ front
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        console.log(quadMaterialFront);
        quadMaterialFront.apply();
        this.quad.display();
        this.scene.popMatrix();

        //z- back
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-Math.PI/2,0,0,1);
        quadMaterialBack.apply();
        this.quad.display();
        this.scene.popMatrix();

        //x+ right
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        quadMaterialLeft.apply();
        this.quad.display();
        this.scene.popMatrix();

        //x- left
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        quadMaterialRight.apply();
        this.quad.display();
        this.scene.popMatrix();

        //y+ top
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI/2,0,0,1);
        quadMaterialTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        //y- bottom
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI/2,0,0,1);
        quadMaterialBottom.apply();
        this.quad.display();
        this.scene.popMatrix();
    }
}
