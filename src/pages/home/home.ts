import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// importing pages
import { GamePage } from '../game/game';
// finish 

// importing custom services
import {Common} from "../../services/common.service";
// finish

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private common: Common) {
  }
  public startWithDefaultImage(): void {
    let defaultObject: any;
    defaultObject = this.common.getDefaultObject();
    this.navCtrl.push(GamePage, defaultObject);
  }
  
}
