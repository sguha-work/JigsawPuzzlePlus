import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
}
