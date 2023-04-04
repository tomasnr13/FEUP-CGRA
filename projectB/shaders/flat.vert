attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float normScale;
varying vec4 coords;
varying vec4 normal;
uniform vec4 cameracoords;


void main() {
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+aVertexNormal*normScale*0.1, 1.0);

	normal = vec4(aVertexNormal, 1.0);
	coords=vec4(aVertexPosition, 1.0);
}

