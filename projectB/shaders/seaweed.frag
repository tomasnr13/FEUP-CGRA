
#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float green;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	
	gl_FragColor = vec4(0 ,green, 0, 1);
}