#ifdef GL_ES
precision highp float;
#endif

struct lightProperties {
    vec4 position;                  
    vec4 ambient;                   
    vec4 diffuse;                   
    vec4 specular;                  
    vec4 half_vector;
    vec3 spot_direction;            
    float spot_exponent;            
    float spot_cutoff;              
    float constant_attenuation;     
    float linear_attenuation;       
    float quadratic_attenuation;    
    bool enabled;                   
};

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
varying vec4 coords;
uniform float red;
uniform float green;
uniform float blue;
uniform float headratio;

#define NUMBER_OF_LIGHTS 8
uniform lightProperties uLight[NUMBER_OF_LIGHTS];

void main() {
	if (coords.y < headratio){
		gl_FragColor = texture2D(uSampler, vTextureCoord);
	}
	else{
		gl_FragColor =  vec4(red,green,blue, 1)* uLight[0].ambient;
	}
}

