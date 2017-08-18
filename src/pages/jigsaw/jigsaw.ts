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
    
  }

  private getDefaultJigsawImage() {
    
    let img = document.createElement("img");
    img.setAttribute("src", "assets/images/default.jpg");
    let c = document.createElement("canvas");
    let ctx = c.getContext("2d");
    
    ctx.drawImage(img, 10, 10);
    alert(c.toDataURL());
  }

  private getImageData() {
    this.imageData = Image.imageData;
    if(this.imageData === "") {
      this.imageData = this.getDefaultJigsawImage();
    }
    alert(JSON.stringify(Image.imageData));
  }

  ngAfterViewInit() {
    this.getImageData();
  }
  
}
