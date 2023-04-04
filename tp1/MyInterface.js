import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        
        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI display axis
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Checkbox element in GUI display diamond
        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');

        //Checkbox element in GUI display parallelogram
        this.gui.add(this.scene, 'displayParallelogram').name('Display Parallel');

        //Checkbox element in GUI display small triangle
        this.gui.add(this.scene, 'displaySmall').name('Display Small');

        //Checkbox element in GUI display big triangle
        this.gui.add(this.scene, 'displayBig').name('Display Big');

        //Slider element in GUI display scaler
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}