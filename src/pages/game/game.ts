import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

// importing custom service and class
import {Image} from './../../classes/image.class';
// finish

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  //public imageData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private event: Events) {
    //this.imageData = this.navParams.get("imageData");
    Image.imageData = this.navParams.get("imageData");
  }
  
}
