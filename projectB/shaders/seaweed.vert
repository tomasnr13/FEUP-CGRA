
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

varying vec2 vTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

void main() {
	vTextureCoord = aTextureCoord;

	vec3 vertexPos = aVertexPosition;

	vertexPos[0] = vertexPos[0] + vertexPos[1] * sin(timeFactor + vertexPos[1]);

	gl_Position = uPMatrix * uMVMatrix * vec4(vertexPos, 1.0);
}