import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor(){
        super();
    }

    init(application){
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayArrow').name('Display Arrow');
        this.gui.add(this.scene, 'displaySphere').name('Display Sphere');
        this.gui.add(this.scene, 'displayCylinder').name('Display Cylinder');

        //Scale slider for moving object
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3.0).name('Scale');

        //Speed slider for moving object
        this.gui.add(this.scene, 'speedFactor', 0.1, 3.0).name('Speed');

        //Dropdown for cube map textures
        this.gui.add(this.scene, 'selectedTexture', this.scene.textureIds).name('Selected Texture').onChange(this.scene.updateAppliedTexture.bind(this.scene));

        //initiating keys
        this.initKeys();

        return true;
    }

    initKeys(){
        this.scene.gui = this;
        this.processKeyboard = function(){};
        this.activeKeys={};
    }

    processKeyDown(event){
        this.activeKeys[event.code]=true;
    };

    processKeyUp(event){
        this.activeKeys[event.code]=false;
    };

    isKeyPressed(keyCode){
        if( this.activeKeys[keyCode] === true && (keyCode == "keyL" || keyCode == "keyP")){
            this.activeKeys[keyCode] = false;
            return true;
          }  
          return this.activeKeys[keyCode] || false;
      }
}