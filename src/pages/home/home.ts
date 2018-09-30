import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import {TimetablePage} from '../timetable/timetable';
import {CalendarPage} from '../calendar/calendar';
import {AlarmPage} from '../alarm/alarm';
import {CameraPage} from '../camera/camera';
import {GpsPage} from '../gps/gps';

import { InAppBrowser } from 'ionic-native';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  tab1Root = HomePage;
  tab2Root = TimetablePage;
  tab3Root = CalendarPage;
  tab4Root = AlarmPage;
  tab5Root = GpsPage;
  tab6Root = CameraPage;


public img:String;
  constructor(public navCtrl: NavController, public platform:Platform, public navParams: NavParams) {
    this.img = "";
  }

  openUrl() {

        this.platform.ready().then(() => {
            let browser = new InAppBrowser("https://learnonline.gmit.ie/",'_blank');
            
        });
}    

gmitUrl() {

        this.platform.ready().then(() => {
            let browser = new InAppBrowser("https://www.gmit.ie/",'_blank');
            
        });
}    

examUrl() {

        this.platform.ready().then(() => {
            let browser = new InAppBrowser("https://ssb.ancheim.ie/gmit/app/twbkwbis.P_WWWLogin",'_blank');
            
        });
}    


   
  
  // Method to navigate to the about page
  //navigateToTimetablePage() {
    //	this.navCtrl.push(TimetablePage);
  //}//navigateToAboutPage()

   // navigateToTimetableChange() {
    //	this.navCtrl.push(TimetablePage, {name: "Kamila"}); 
 // }//navigateToAboutPageChange()

 // Method to navigate to the about page
  //navigateToCalendarPage() {
    //	this.navCtrl.push(CalendarPage);
 // }//navigateToAboutPage()

 //   navigateToCalendarChange() {
    //	this.navCtrl.push(CalendarPage, {name: "Kamila"}); 
 // }//navigateToAboutPageChange()

 


  }
