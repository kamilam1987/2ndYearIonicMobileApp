import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {Camera} from "ionic-native";
import {CameraOptions} from 'ionic-native';
import {Diagnostic} from 'ionic-native';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  public img:String;
  public cameraSupported:boolean;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,  public platform:Platform) {
    this.img = "";
    platform.ready().then(() => {

      Diagnostic.isCameraPresent().then((res) => {
        console.log('diagnostic result', res);
        this.cameraSupported = res;
      }).catch((err) =>  {
        console.log('got an error using diagnostic');
        console.dir(err);
      });
    });
    
  }
   getPic(type:String) {
    let options:CameraOptions = {
      targetWidth:1100,
      targetHeight:1100,
      saveToPhotoAlbum: true
    }
    if(type === 'select') {
      options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
      } else {
      options.sourceType = Camera.PictureSourceType.CAMERA;
    }
    Camera.getPicture(options).then((url) => {
      this.img = url;
    });
   }


  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }


}