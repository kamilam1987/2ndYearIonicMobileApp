import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Calendar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {
    //store return value from af.database.list below
     events: FirebaseListObservable<any>;

     constructor
     (public navCtrl: NavController,
      public navParams: NavParams,
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController,
      public alertCtrl: AlertController,
      public af: AngularFire) {

          this.events = af.database.list('/events'); 
        }
        eventSource;
        viewTitle;
        
 

    isToday:boolean;
    calendar = {
    mode: 'month',
    currentDate : new Date()
  };
   
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    today() {
        this.calendar.currentDate = new Date();
    }
    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }
    onCurrentDateChanged(event:Date) {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }
   
    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }
    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };
    //This function allows users to add, delete or close new event from callendar.
    
    addEvent(title, startTime, endTime, startDate, endDate){
        this.events.push({
            title: title,
            startTime: startTime,
            endTime: endTime,
            startDate: startDate,
            endDate: endDate

            
        });

    }
    

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }
  
}
