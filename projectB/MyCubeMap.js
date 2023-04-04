import {CGFobject , CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends CGFobject {
	constructor(scene, texXtop, texYtop, texZtop, texXbottom, texYbottom, texZbottom) {
		super(scene);

        this.texYtop = texYtop;
        this.texZtop = texZtop;
        this.texXtop = texXtop;
        this.texZbottom = texZbottom;
        this.texXbottom = texXbottom;
        this.texYbottom = texYbottom;

		this.init();
	}
	
    init(){
        this.quad = new MyQuad(this.scene);

        this.quadMaterialTop = new CGFappearance(this.scene);
        this.quadMaterialTop.setAmbient(10, 10, 10, 10);
        this.quadMaterialTop.setDiffuse(0, 0, 0, 0);
        this.quadMaterialTop.setSpecular(0, 0, 0, 0);
        this.quadMaterialTop.setShininess(10.0);
        this.quadMaterialTop.loadTexture(this.texYtop);

        this.quadMaterialFront = new CGFappearance(this.scene);
        this.quadMaterialFront.setAmbient(10, 10, 10, 10);
        this.quadMaterialFront.setDiffuse(0, 0, 0, 0);
        this.quadMaterialFront.setSpecular(0, 0, 0, 0);
        this.quadMaterialFront.setShininess(10.0);
        this.quadMaterialFront.loadTexture(this.texZtop);

        this.quadMaterialBack = new CGFappearance(this.scene);
        this.quadMaterialBack.setAmbient(10, 10, 10, 10);
        this.quadMaterialBack.setDiffuse(0, 0, 0, 0);
        this.quadMaterialBack.setSpecular(0, 0, 0,0);
        this.quadMaterialBack.setShininess(10.0);
        this.quadMaterialBack.loadTexture(this.texZbottom);

        this.quadMaterialLeft = new CGFappearance(this.scene);
        this.quadMaterialLeft.setAmbient(10, 10, 10, 10);
        this.quadMaterialLeft.setDiffuse(0, 0, 0, 0);
        this.quadMaterialLeft.setSpecular(0, 0, 0,0);
        this.quadMaterialLeft.setShininess(10.0);
        this.quadMaterialLeft.loadTexture(this.texXbottom);

        this.quadMaterialRight = new CGFappearance(this.scene);
        this.quadMaterialRight.setAmbient(10, 10, 10, 10);
        this.quadMaterialRight.setDiffuse(0, 0, 0, 0);
        this.quadMaterialRight.setSpecular(0, 0, 0, 0);
        this.quadMaterialRight.setShininess(10.0);
        this.quadMaterialRight.loadTexture(this.texXtop);

        this.quadMaterialBottom = new CGFappearance(this.scene);
        this.quadMaterialBottom.setAmbient(10, 10, 10, 10);
        this.quadMaterialBottom.setDiffuse(0, 0, 0, 0);
        this.quadMaterialBottom.setSpecular(0, 0, 0, 0);
        this.quadMaterialBottom.setShininess(10.0);
        this.quadMaterialBottom.loadTexture(this.texYbottom);
    }

    display(){
        //z+ front
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.quadMaterialFront.apply();
        this.quad.display();
        this.scene.popMatrix();

        //z- back
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.quadMaterialBack.apply();
        this.quad.display();
        this.scene.popMatrix();

        //x+ right
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.quadMaterialLeft.apply();
        this.quad.display();
        this.scene.popMatrix();

        //x- left
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.quadMaterialRight.apply();
        this.quad.display();
        this.scene.popMatrix();

        //y+ top
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.quadMaterialTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        //y- bottom
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.quadMaterialBottom.apply();
        this.quad.display();
        this.scene.popMatrix();
    }
}
