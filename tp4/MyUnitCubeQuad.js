import {CGFobject , CGFappearance, CGFtexture} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, texYtop, texZtop, texXtop, texZbottom, texXbottom, texYbottom) {
		super(scene);

        this.texYtop = texYtop;
        this.texZtop = texZtop;
        this.texXtop = texXtop;
        this.texZbottom = texZbottom;
        this.texXbottom = texXbottom;
        this.texYbottom = texYbottom;

		this.init(scene);
	}
	
    init(scene){
        this.quadMaterialTop = new CGFappearance(scene);
        this.quadMaterialTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.quadMaterialTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.quadMaterialTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.quadMaterialTop.setShininess(10.0);
        this.quadMaterialTop.loadTexture(this.texYtop);

        this.quad = new MyQuad(scene);
        this.quadMaterialSide = new CGFappearance(scene);
        this.quadMaterialSide.setAmbient(0.1, 0.1, 0.1, 1);
        this.quadMaterialSide.setDiffuse(0.9, 0.9, 0.9, 1);
        this.quadMaterialSide.setSpecular(0.1, 0.1, 0.1, 1);
        this.quadMaterialSide.setShininess(10.0);
        this.quadMaterialSide.loadTexture(this.texXtop);

        this.quadMaterialBottom = new CGFappearance(scene);
        this.quadMaterialBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.quadMaterialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.quadMaterialBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.quadMaterialBottom.setShininess(10.0);
        this.quadMaterialBottom.loadTexture(this.texYbottom);
    }

    display(){
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.quadMaterialSide.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.quadMaterialSide.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.quadMaterialTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.quadMaterialBottom.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.quadMaterialSide.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.quadMaterialSide.apply();
        this.quad.display();
        this.scene.popMatrix();
    }
}
