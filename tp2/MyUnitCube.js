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
			0.5, 0.5, 0.5		//top 4     //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			5, 4, 0,    
			1, 5, 0,   //yz face (back)    
            7, 6, 2,
            3, 7, 2,   //yz face (front)
            7, 5, 4, 
            7, 4, 6,   //xy face (top)
            3, 1, 0,
            3, 0, 2,   //xy face (bottom)
            2, 0, 4,
            4, 6, 2,   //xz face (back)
            1, 5, 7, 
            1, 7, 3,   //xz face (front)
			0, 4, 5,   //ALL THE PREVIOUS INVERTED
			0, 5, 1,   //yz face (back)    
            2, 6, 7,
            2, 7, 3,   //yz face (front)
            4, 5, 7, 
            6, 4, 7,   //xy face (top)
            0, 1, 3,
            2, 0, 3,   //xy face (bottom)
            4, 0, 2,
            2, 6, 4,   //xz face (back)
            7, 5, 1, 
            3, 7, 1,   //xz face (front)
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
