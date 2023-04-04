import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	//bottom 1  //0
			-0.5, 0.5, -0.5,	//bottom 2  //1
			0.5, -0.5, -0.5,	//bottom 3  //2
			0.5, 0.5, -0.5,		//bottom 4  //3
            -0.5, -0.5, 0.5,	//top 1     //4
			-0.5, 0.5, 0.5,	    //top 2     //5
			0.5, -0.5, 0.5,	    //top 3     //6
			0.5, 0.5, 0.5,		//top 4     //7
			-0.5, -0.5, -0.5,	//bottom 1  //8 0
			-0.5, 0.5, -0.5,	//bottom 2  //9 1
			0.5, -0.5, -0.5,	//bottom 3  //10 2
			0.5, 0.5, -0.5,		//bottom 4  //11 3
            -0.5, -0.5, 0.5,	//top 1     //12 4
			-0.5, 0.5, 0.5,	    //top 2     //13 5
			0.5, -0.5, 0.5,	    //top 3     //14 6
			0.5, 0.5, 0.5,		//top 4     //15 7
			-0.5, -0.5, -0.5,	//bottom 1  //16 0
			-0.5, 0.5, -0.5,	//bottom 2  //17 1
			0.5, -0.5, -0.5,	//bottom 3  //18 2
			0.5, 0.5, -0.5,		//bottom 4  //19 3
            -0.5, -0.5, 0.5,	//top 1     //20 4
			-0.5, 0.5, 0.5,	    //top 2     //21 5
			0.5, -0.5, 0.5,	    //top 3     //22 6
			0.5, 0.5, 0.5		//top 4     //23 7
		]; 

		//Counter-clockwise reference of vertices
		this.indices = [
			5, 4, 0,    
			1, 5, 0,   //yz face (back)    
            7, 6, 2,
            3, 7, 2,   //yz face (front)
            15, 13, 12, 
            15, 12, 14,   //xy face (top)
            11, 9, 8,
            11, 8, 10,   //xy face (bottom)
            18, 16, 20,
            20, 22, 18,   //xz face (back)
            17, 21, 23, 
            17, 23, 19   //xz face (front)
		];

		this.normals = [
			-1, 0, 0, //0
			-1, 0, 0, //1
			 1, 0, 0, //2
			 1, 0, 0, //3
			-1, 0, 0, //4
			-1, 0, 0, //5
			 1, 0, 0, //6
			 1, 0, 0, //7
			 0, 0, -1, //8
			 0, 0, -1, //9
			 0, 0, -1, //10
			 0, 0, -1, //11
			 0, 0, 1, //12
			 0, 0, 1, //13
			 0, 0, 1, //14
			 0, 0, 1, //15
			 0, -1, 0, //16
			 0, 1, 0, //17
			 0, -1, 0, //18
			 0, 1, 0, //19
			 0, -1, 0, //20
			 0, 1, 0, //21
			 0, -1, 0, //22
			 0, 1, 0 //23
		]; 

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
