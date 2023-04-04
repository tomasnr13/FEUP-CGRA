import {CGFobject} from '../lib/CGF.js';
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
    scene.diamond = new MyDiamond(scene);
    scene.triangle = new MyTriangle(scene);
    scene.parallelogram = new MyParallelogram(scene);
    scene.triangleSmall = new MyTriangleSmall(scene);
    scene.triangleSmall2 = new MyTriangleSmall(scene);
    scene.triangleBig = new MyTriangleBig(scene);
    scene.triangleBig2 = new MyTriangleBig(scene);
    this.scaleFactorX = 1;
    this.scaleFactorY = 1;
    this.scaleFactorZ = 1;
    this.translateFactorX = 0;
    this.translateFactorY = 0;
    this.translateFactorZ = 0;
  }

    display(scene){
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

    scene.pushMatrix();
    scene.multMatrix(tra);
    scene.diamond.display();
    scene.popMatrix();

    scene.pushMatrix();
    scene.translate(2, 0, 0);
    scene.triangleBig.display();
    scene.popMatrix();

    scene.pushMatrix();
    scene.translate(3, 0, 0);
    scene.triangleSmall.display();
    scene.popMatrix();

    scene.pushMatrix();
    scene.rotate(Math.PI / 4, 0, 0, 1);
    scene.translate(0, -2, 0);
    scene.triangleBig2.display();
    scene.popMatrix();

    scene.pushMatrix();
    scene.translate(-1, -1, 0);
    scene.rotate(Math.PI / 2, 0, 0, 1);
    scene.triangle.display();
    scene.popMatrix();

    scene.pushMatrix();
    scene.translate(0, -3.8, 0);
    scene.triangleSmall2.display();
    scene.popMatrix();

    scene.pushMatrix();
    scene.translate(0, -2, 0);
    scene.rotate(Math.PI / 4, 0, 0, 1);
    scene.rotate(Math.PI, 0, 1, 0);
    scene.parallelogram.display();
    scene.popMatrix();
    }
}