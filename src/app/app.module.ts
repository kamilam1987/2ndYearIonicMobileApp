import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {NgCalendarModule } from 'ionic2-calendar';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
//import all pages 
import { HomePage } from '../pages/home/home';
import { TimetablePage}  from '../pages/timetable/timetable';
import { CalendarPage}  from '../pages/calendar/calendar';
import { AlarmPage}  from '../pages/alarm/alarm';
import { CameraPage}  from '../pages/camera/camera';
import {GpsPage} from '../pages/gps/gps';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
var config = {
    apiKey: "AIzaSyCBhU5_BjCX35rIz-V8PqJJSHXQbXPZfoQ",
    authDomain: "myapp-e9b44.firebaseapp.com",
    databaseURL: "https://myapp-e9b44.firebaseio.com",
    projectId: "myapp-e9b44",
    storageBucket: "myapp-e9b44.appspot.com",
    messagingSenderId: "677913726235"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimetablePage,
    CalendarPage,
    AlarmPage,
    CameraPage,
    GpsPage,
    TabsPage,
    ],
  imports: [
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    FormsModule,
    BrowserModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimetablePage,
    CalendarPage,
    AlarmPage,
    CameraPage,
    GpsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
