import {CGFobject , CGFappearance, CGFtexture, CGFshader} from '../lib/CGF.js';
import { MyPlane } from "./MyPlane.js";
/**
 * MySeaFloor
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MySeaFloor extends CGFobject {
	constructor(scene, nDiv, dimX, dimY, maxHeight) {
		super(scene);
        this.nDiv = nDiv;
        this.dimX = dimX;
        this.dimY = dimY;
        this.maxHeight = maxHeight;
		this.init();
	}
	
    init(){
        this.floor = new MyPlane(this.scene, this.nDiv);
        this.floorTexture = 'images/sandnest.png';
        this.sandMap = new CGFtexture(this.scene, "images/sandMap.png");
        this.floorShader = new CGFshader(this.scene.gl, "shaders/floorShader.vert", "shaders/floorShader.frag");
        this.floorShader.setUniformsValues({ uSampler2: 1, });

        this.floorMaterial = new CGFappearance(this.scene);
        this.floorMaterial.setAmbient(1, 1, 1, 1);
        this.floorMaterial.setDiffuse(0, 0, 0, 0);
        this.floorMaterial.setSpecular(0, 0, 0, 0);
        this.floorMaterial.setShininess(10.0);
        this.floorMaterial.loadTexture(this.floorTexture);
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 3.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(this.dimX, this.dimY, 1);
        this.floorMaterial.apply();
        this.scene.setActiveShader(this.floorShader);
        this.sandMap.bind(1);
        this.floor.display();
        this.scene.popMatrix();
    }

}
