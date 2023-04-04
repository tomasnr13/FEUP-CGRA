import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleBig extends CGFobject {
	constructor(scene, texCoordss) {
		super(scene);
		this.initBuffers(texCoordss);
	}
	
	initBuffers(texCoordss) {
		this.vertices = [
		   -2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];

		this.texCoords = texCoordss;

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
			 updateTexCoords(coords) {
				this.texCoords = [...coords];
				this.updateTexCoordsGLBuffers();
			}
}
