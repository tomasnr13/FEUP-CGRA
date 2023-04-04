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

        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox for displaying axis
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Checkbox for displaying fish
        this.gui.add(this.scene, 'displayFish').name('Display Fish');

        //Scale slider for fish
        this.gui.add(this.scene, 'fishScaleFactor', 0.5, 3.0).name('Fish Scale');

        //Speed slider for fish
        this.gui.add(this.scene, 'fishSpeedFactor', 0.1, 3.0).name('Fish Speed');

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