import {CGFobject , CGFappearance} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        this.init(scene);
    }

  init(scene){
    this.diamond = new MyDiamond(scene);
    this.triangle = new MyTriangle(scene);
    this.parallelogram = new MyParallelogram(scene);
    this.triangleSmall = new MyTriangleSmall(scene);
    this.triangleSmall2 = new MyTriangleSmall(scene);
    this.triangleBig = new MyTriangleBig(scene);
    this.triangleBig2 = new MyTriangleBig(scene);
    this.scaleFactorX = 1;
    this.scaleFactorY = 1;
    this.scaleFactorZ = 1;
    this.translateFactorX = 0;
    this.translateFactorY = 0;
    this.translateFactorZ = 0;

    this.mdiamond = new CGFappearance(scene);
    this.mdiamond.setAmbient(0, 1, 0, 1.0);
    this.mdiamond.setDiffuse(0, 1, 0, 1.0);
    this.mdiamond.setSpecular(1, 1, 1, 1.0);
    this.mdiamond.setShininess(10.0);

    this.mtriangle = new CGFappearance(scene);
    this.mtriangle.setAmbient(1, 0.6, 0.8, 1.0);
    this.mtriangle.setDiffuse(1, 0.6, 0.8, 1.0);
    this.mtriangle.setSpecular(1, 1, 1, 1.0);
    this.mtriangle.setShininess(10.0);

    this.mtrianglesmall = new CGFappearance(scene);
    this.mtrianglesmall.setAmbient(0.6, 0, 0.6, 1.0);
    this.mtrianglesmall.setDiffuse(0.6, 0, 0.6, 1.0);
    this.mtrianglesmall.setSpecular(1, 1, 1, 1.0);
    this.mtrianglesmall.setShininess(10.0);

    this.mtrianglesmall2 = new CGFappearance(scene);
    this.mtrianglesmall2.setAmbient(1, 0, 0, 1.0);
    this.mtrianglesmall2.setDiffuse(1, 0, 0, 1.0);
    this.mtrianglesmall2.setSpecular(1, 1, 1, 1.0);
    this.mtrianglesmall2.setShininess(10.0);

    this.mtrianglebig = new CGFappearance(scene);
    this.mtrianglebig.setAmbient(1, 0.5, 0, 1.0);
    this.mtrianglebig.setDiffuse(1, 0.5, 0, 1.0);
    this.mtrianglebig.setSpecular(1, 1, 1, 1.0);
    this.mtrianglebig.setShininess(10.0);

    this.mtrianglebig2 = new CGFappearance(scene);
    this.mtrianglebig2.setAmbient(0.2, 0.6, 1, 1.0);
    this.mtrianglebig2.setDiffuse(0.2, 0.6, 1, 1.0);
    this.mtrianglebig2.setSpecular(1, 1, 1, 1.0);
    this.mtrianglebig2.setShininess(10.0);
    
    this.mparallelogram = new CGFappearance(scene);
    this.mparallelogram.setAmbient(1, 1, 0, 1.0);
    this.mparallelogram.setDiffuse(1, 1, 0, 1.0);
    this.mparallelogram.setSpecular(1, 1, 1, 1.0);
    this.mparallelogram.setShininess(10.0);
  }

    display(){
      var sca = [
          this.scaleFactorX,
          0.0,
          0.0,
          0.0,
          0.0,
          this.scaleFactorY,
          0.0,
          0.0,
          0.0,
          0.0,
          this.scaleFactorZ,
          0.0,
          0.0,
          0.0,
          0.0,
          1.0,
        ];
    
        var tra = [
          1.0,
          0.0,
          0.0,
          0.0,
          0.0,
          1.0,
          0.0,
          0.0,
          0.0,
          0.0,
          1.0,
          0.0,
          this.translateFactorX,
          this.translateFactorY,
          this.translateFactorZ,
          1.0,
        ];
    
        // ---- BEGIN Primitive drawing section
    
    this.translateFactorX = 4;
    this.translateFactorY = 1;

    this.scene.pushMatrix(); 
    this.scene.multMatrix(tra);
    this.scene.setDiffuse(1,1,1,1);
    this.diamond.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2, 0, 0);
    this.mtrianglebig2.apply();
    this.triangleBig.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(5, 0, 0);
    this.mtrianglesmall.apply();
    this.triangleSmall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI / 4, 0, 0, 1);
    this.scene.translate(0, -2, 0);
    this.mtrianglebig.apply();
    this.triangleBig2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-1, -1, 0);
    this.scene.rotate(Math.PI / 2, 0, 0, 1);
    this.mtriangle.apply();
    this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, -3.8, 0);
    this.mtrianglesmall2.apply();
    this.triangleSmall2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, -2, 0);
    this.scene.rotate(Math.PI / 4, 0, 0, 1);
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.mparallelogram.apply();
    this.parallelogram.display();
    this.scene.popMatrix();
    }

    enableNormalViz(){
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleSmall2.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleBig2.enableNormalViz();
    }

    
    disableNormalViz(){
      this.diamond.disableNormalViz();
      this.triangle.disableNormalViz();
      this.parallelogram.disableNormalViz();
      this.triangleSmall.disableNormalViz();
      this.triangleSmall2.disableNormalViz();
      this.triangleBig.disableNormalViz();
      this.triangleBig2.disableNormalViz();
  }
}

/*export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.diamond = new MyDiamond(this.scene);
		this.pinkTriangle = new MyTriangle(this.scene);
		this.blueTriangle = new MyTriangleBig(this.scene);
		this.orangeTriangle = new MyTriangleBig(this.scene);
		this.parallelogram = new MyParallelogram(this.scene);
		this.redTriangle = new MyTriangleSmall(this.scene);
		this.purpleTriangle = new MyTriangleSmall(this.scene);

		this.diamondMaterial = new CGFappearance(this.scene);
		this.pinkMaterial = new CGFappearance(this.scene);
		this.blueMaterial = new CGFappearance(this.scene);
		this.orangeMaterial = new CGFappearance(this.scene);
		this.parallelogramMaterial = new CGFappearance(this.scene);
		this.redMaterial = new CGFappearance(this.scene);
		this.purpleMaterial = new CGFappearance(this.scene);

		this.diamondMaterial.setAmbient(0, 1, 0, 1);
		this.diamondMaterial.setDiffuse(0, 1, 0, 1);
		this.diamondMaterial.setSpecular(1, 1, 1, 1);
		this.diamondMaterial.setShininess(10.0);

		this.pinkMaterial.setAmbient(1, 0.753, 0.796, 1);
		this.pinkMaterial.setDiffuse(1, 0.753, 0.796, 1);
		this.pinkMaterial.setSpecular(1, 1, 1, 1);
		this.pinkMaterial.setShininess(10.0);

		this.blueMaterial.setAmbient(0.012, 0.662, 0.956, 1);
		this.blueMaterial.setDiffuse(0.012, 0.662, 0.956, 1);
		this.blueMaterial.setSpecular(1, 1, 1, 1);
		this.blueMaterial.setShininess(10.0);

		this.orangeMaterial.setAmbient(1, 0.514, 0, 1);
		this.orangeMaterial.setDiffuse(1, 0.514, 0, 1);
		this.orangeMaterial.setSpecular(1, 1, 1, 1);
		this.orangeMaterial.setShininess(10.0);

		this.parallelogramMaterial.setAmbient(1,1,0,1);
		this.parallelogramMaterial.setDiffuse(1,1,0,1);
		this.parallelogramMaterial.setSpecular(1, 1, 1, 1);
		this.parallelogramMaterial.setShininess(10.0);

		this.redMaterial.setAmbient(1, 0, 0, 1);
		this.redMaterial.setDiffuse(1, 0, 0, 1);
		this.redMaterial.setSpecular(1, 1, 1, 1);
		this.redMaterial.setShininess(10.0);

		this.purpleMaterial.setAmbient(1,0,1,1);
		this.purpleMaterial.setDiffuse(1,0,1,1);
		this.purpleMaterial.setSpecular(1, 1, 1, 1);
		this.purpleMaterial.setShininess(10.0);
	}

    display() {

        var angle = (15*Math.PI)/180;

		var diamondTranslation1Matrix = [
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,1,0,1
		];

		var diamondTranslation2Matrix = [
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
	  		0,2,0,1
  		];

		var diamondRotationMatrix = [
			Math.cos(angle),  Math.sin(angle), 0, 0,
			-Math.sin(angle), Math.cos(angle), 0, 0,
			0,           0,          1, 0,
			0,           0,          0, 1
		];

		this.scene.pushMatrix();
		this.scene.multMatrix(diamondTranslation2Matrix);
		this.scene.multMatrix(diamondRotationMatrix);
		this.scene.multMatrix(diamondTranslation1Matrix);
        this.diamond.display();
		this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.setDiffuse(1, 0.753, 0.796, 1);
		this.scene.translate(1, 3, 0);
		this.scene.rotate(Math.PI/2, 0, 0, 1);
		this.pinkMaterial.apply();
		this.pinkTriangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.setDiffuse(1,1,0,1);
		this.scene.translate(-Math.sqrt(2),-2*Math.sqrt(2),0);
		this.scene.rotate(Math.PI/4,0,0,1);
		this.scene.rotate(Math.PI,1,0,0);
		this.parallelogramMaterial.apply();
		this.parallelogram.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.setDiffuse(1,0,1,1);
		this.scene.translate(-Math.sqrt(2),-2.5*Math.sqrt(2),0);
		this.scene.rotate(Math.PI/4,0,0,1);
		this.purpleMaterial.apply();
		this.purpleTriangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.setDiffuse(0.012, 0.662, 0.956, 1);
		this.scene.rotate(Math.PI, 0, 0, 1);
		this.scene.translate(0, -2, 0);
		this.blueMaterial.apply();
		this.blueTriangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.setDiffuse(1, 0.514, 0, 1);
		this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
		this.orangeMaterial.apply();
		this.orangeTriangle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.setDiffuse(1, 0, 0, 1);
		this.scene.translate(-1.8, -1.8, 0);
		this.scene.rotate(Math.PI/4, 0, 0, 1);
		this.redMaterial.apply();
		this.redTriangle.display();
		this.scene.popMatrix();
    }

	enableNormalViz() {
		this.diamond.enableNormalViz();
		this.pinkTriangle.enableNormalViz();
		this.parallelogram.enableNormalViz();
		this.purpleTriangle.enableNormalViz();
		this.blueTriangle.enableNormalViz();
		this.orangeTriangle.enableNormalViz();
		this.redTriangle.enableNormalViz();
    }
    disableNormalViz() {
		this.diamond.disableNormalViz();
		this.pinkTriangle.disableNormalViz();
		this.parallelogram.disableNormalViz();
		this.purpleTriangle.disableNormalViz();
		this.blueTriangle.disableNormalViz();
		this.orangeTriangle.disableNormalViz();
		this.redTriangle.disableNormalViz();
    }
}*/