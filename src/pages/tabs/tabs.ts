import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TimetablePage } from '../timetable/timetable';
import { CalendarPage } from '../calendar/calendar';
import { AlarmPage } from '../alarm/alarm';
import {GpsPage} from '../gps/gps';
import{CameraPage} from '../camera/camera';



/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
   tab1Root: any = HomePage;
   tab2Root: any = TimetablePage;
   tab3Root: any = CalendarPage;
   tab4Root: any = AlarmPage;
   tab5Root: any = GpsPage;
   tab6Root: any = CameraPage;
 


  constructor() {

  }

}
