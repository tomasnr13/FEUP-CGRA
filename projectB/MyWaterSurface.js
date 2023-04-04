import {CGFobject , CGFappearance, CGFtexture, CGFshader} from '../lib/CGF.js';
import { MyPlane } from "./MyPlane.js";

/**
 * MyWaterSurface
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyWaterSurface extends CGFobject {
	constructor(scene) {
		super(scene);
        this.texture = 'images/pier.jpg';
        this.nDiv = 20;
        this.dimX = 50;
        this.dimY = 50;
        this.maxHeight = 0;
		this.init();
	}
	
    init(){
        this.surface = new MyPlane(this.scene, this.nDiv);
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(10, 10, 10, 10);
        this.material.setDiffuse(0, 0, 0, 0);
        this.material.setSpecular(0, 0, 0, 0);
        this.material.setShininess(10.0);
        this.material.loadTexture(this.texture);
        this.waterMap = new CGFtexture(this.scene, "images/distortionmap.png");
        this.shader = new CGFshader(this.scene.gl, "shaders/water.vert", "shaders/water.frag");
        this.shader.setUniformsValues({ uSampler2: 1, timefactor: 0});
        this.scene.setUpdatePeriod(50);
    }

    update(t){
        this.shader.setUniformsValues({ timeFactor: t / 10000  % 100 });
    }

    display(){
        this.scene.pushMatrix();
        this.material.apply();
        this.scene.setActiveShader(this.shader);
        this.waterMap.bind(1);
        this.scene.translate(0, 10, 0);
        this.scene.rotate(Math.PI,0,0,1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(this.dimX, this.dimY, 1);
        this.surface.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}
