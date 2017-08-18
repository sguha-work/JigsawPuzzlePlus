import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AfterViewInit } from '@angular/core';

// importing custom service and class
import {Image} from './../../classes/image.class';
// finish

@Component({
  selector: 'page-jigsaw',
  templateUrl: 'jigsaw.html'
})
export class Jigsaw  implements AfterViewInit{
  public imageData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private event: Events) {
    this.getImageData();
  }

  private getImageData() {
    this.imageData = Image.imageData;
    alert(JSON.stringify(Image.imageData));
  }

  ngAfterViewInit() {
   
  }
  
}
