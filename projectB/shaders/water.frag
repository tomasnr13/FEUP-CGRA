#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
    vec4 filter = texture2D(uSampler2, vTextureCoord + vec2(timeFactor,0));
    vec2 coords = vTextureCoord + vec2(filter.r - 0.5,filter.g - 0.5);

    if (coords.t < 0.001)
        coords.t = 0.001;
    else if (coords.t > 0.999)
        coords.t = 0.999;
    if (coords.s < 0.001)
        coords.s = 0.001;
    else if (coords.s > 0.999)
        coords.s = 0.999;

    gl_FragColor = texture2D(uSampler, coords);
}