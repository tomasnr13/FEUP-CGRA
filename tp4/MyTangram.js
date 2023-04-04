import {CGFobject , CGFappearance, CGFtexture} from '../lib/CGF.js';
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
    this.triangleSmall = new MyTriangleSmall(scene, [0, 0, 0, 0.5, 0.25, 0.25]);
    this.triangleSmall2 = new MyTriangleSmall(scene, [0.25, 0.75, 0.75, 0.75,0.5, 0.5]);
    this.triangleBig = new MyTriangleBig(scene, [0, 0, 1, 0, 0.5, 0.5]);
    this.triangleBig2 = new MyTriangleBig(scene, [1, 0, 1, 1, 0.5, 0.5]);
    this.scaleFactorX = 1;
    this.scaleFactorY = 1;
    this.scaleFactorZ = 1;
    this.translateFactorX = 0;
    this.translateFactorY = 0;
    this.translateFactorZ = 0;

    this.mdiamond = new CGFappearance(scene);
    this.mdiamond.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.mdiamond.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.mdiamond.setSpecular(1, 1, 1, 1.0);
    this.mdiamond.setShininess(10.0);

    this.mtriangle = new CGFappearance(scene);
    this.mtriangle.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.mtriangle.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.mtriangle.setSpecular(1, 1, 1, 1.0);
    this.mtriangle.setShininess(10.0);

    this.mtrianglesmall = new CGFappearance(scene);
    this.mtrianglesmall.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.mtrianglesmall.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.mtrianglesmall.setSpecular(1, 1, 1, 1.0);
    this.mtrianglesmall.setShininess(10.0);

    this.mtrianglesmall2 = new CGFappearance(scene);
    this.mtrianglesmall2.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.mtrianglesmall2.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.mtrianglesmall2.setSpecular(1, 1, 1, 1.0);
    this.mtrianglesmall2.setShininess(10.0);

    this.mtrianglebig = new CGFappearance(scene);
    this.mtrianglebig.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.mtrianglebig.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.mtrianglebig.setSpecular(1, 1, 1, 1.0);
    this.mtrianglebig.setShininess(10.0);

    this.mtrianglebig2 = new CGFappearance(scene);
    this.mtrianglebig2.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.mtrianglebig2.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.mtrianglebig2.setSpecular(1, 1, 1, 1.0);
    this.mtrianglebig2.setShininess(10.0);
    
    this.mparallelogram = new CGFappearance(scene);
    this.mparallelogram.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.mparallelogram.setDiffuse(0.9, 0.9, 0.9, 1.0);
    this.mparallelogram.setSpecular(1, 1, 1, 1.0);
    this.mparallelogram.setShininess(10.0);

    this.mdiamond.loadTexture('images/tangram.png');
    this.mtriangle.loadTexture('images/tangram.png');
    this.mtrianglesmall.loadTexture('images/tangram.png');
    this.mtrianglesmall2.loadTexture('images/tangram.png');
    this.mtrianglebig.loadTexture('images/tangram.png');
    this.mtrianglebig2.loadTexture('images/tangram.png');
    this.mparallelogram.loadTexture('images/tangram.png');
   
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
    this.mdiamond.apply();
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
      this.diamond.disableNormalViz();
      this.triangle.disableNormalViz();
      this.parallelogram.disableNormalViz();
      this.triangleSmall.disableNormalViz();
      this.triangleSmall2.disableNormalViz();
      this.triangleBig.disableNormalViz();
      this.triangleBig2.disableNormalViz();
    }
}
