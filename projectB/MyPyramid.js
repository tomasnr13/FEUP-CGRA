import {CGFobject} from '../lib/CGF.js';

/**
* MyPyramid
* @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of divisions around the Y axis
 * @param stacks - number of divisions along the Y axis
*/
export class MyPyramid extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different
            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            //---------------------STACKS---------------------
            
            var heightStep = 1 / this.stacks;

            this.vertices.push(0, 1, 0);
            this.normals.push(0, 1, 0);

            for(var j = 0; j < this.stacks; j++){
                this.vertices.push(ca * (j + 1) * heightStep, 1 - (j + 1) * heightStep, -sa * (j + 1) * heightStep);
                this.vertices.push(caa * (j + 1) * heightStep, 1 - (j + 1) * heightStep, -saa * (j + 1) * heightStep);

                this.normals.push(ca * (j + 1) * heightStep, 1, -sa * (j + 1) * heightStep);
                this.normals.push(caa * (j + 1) * heightStep, 1, -saa * (j + 1) * heightStep);

                var verticesPerSlice = 2 * this.stacks + 1;

                if(j == 0){
                    this.indices.push((verticesPerSlice * i), (verticesPerSlice * i) + 1, (verticesPerSlice * i) + 2);
                }
                else{
                    this.indices.push((verticesPerSlice * i) + (j - 1) * 2 + 1, (verticesPerSlice * i) + (j - 1) * 2 + 4, (verticesPerSlice * i) + (j - 1) * 2 + 2);
                    this.indices.push((verticesPerSlice * i) + (j - 1) * 2 +  1, (verticesPerSlice * i) + (j - 1) * 2 + 3, (verticesPerSlice * i) + (j - 1) * 2 + 4);
                }
            }
            
            //------------------END STACKS------------------

            ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
     */
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
