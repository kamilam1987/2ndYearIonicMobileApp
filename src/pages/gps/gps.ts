import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


/*
  Generated class for the Gps page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

/*this is to prevent any warnings from TypeScript about the google 
object that the Google Maps SDK makes available to us
*/

declare var google;
 
@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html'
})
export class GpsPage {

@ViewChild('map') mapElement: ElementRef;
  map: any;
 
 //constructor add geolocation
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
  ) {}

  ionViewDidLoad() {
   this.loadMap();
  }

  
   loadMap(){
  this.geolocation.getCurrentPosition().then((position) => {
 //represent the location that we want to center the map on
    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     }, (err) => {
      console.log(err);
    });
}
addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  let content = "Information";          
 
  this.addInfoWindow(marker, content);
 
}
addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    
    infoWindow.open(this.map, marker);
  });
 
}

}
