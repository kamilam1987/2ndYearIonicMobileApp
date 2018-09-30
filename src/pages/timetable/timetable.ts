import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { AlertController, ActionSheetController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

/*
  Generated class for the Timetable page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html'
})
export class TimetablePage {
  mondays : FirebaseListObservable<any>;
  tuesdays: FirebaseListObservable<any>;
  wednesdays: FirebaseListObservable<any>;
  thursdays: FirebaseListObservable<any>;
  fridays: FirebaseListObservable<any>;
  
  day: string = "Mon";
  isAndroid: boolean = false;
 
  
  
  //constructors 
  //AngularFire-stores data in Firebase
  //ActionSheetController-creates action sheets
  //AlertController-creates alert controller
   constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public af: AngularFire,
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    ) {
     

   //Pushed the posts to the database for each day of the week(Monday to Friday)
    this.mondays = af.database.list('/monday');
    this.tuesdays = af.database.list('/tuesday');
    this.wednesdays = af.database.list('/wednesday');
    this.thursdays = af.database.list('/thursday');
    this.fridays = af.database.list('/friday');
    this.isAndroid = platform.is('android');

   }
  
  //Function that push data to Monday Timetable
  addToMonday(name, type, time, room){
    this.mondays.push({
      name: name,
      type: type,
      time: time,
      room: room,
    });
  }//addToMonday

  ///////////////////////////////
  Options(mondayId) {

let actionSheet = this.actionSheetCtrl.create({

title: 'What do you want to do ?',

buttons: [

{

text: 'Delete ',

role: 'destructive',

handler: () => {

console.log("Deleting... " + mondayId);

this.mondays.remove(mondayId);

}

},{

text: 'Update ',

handler: () => {

this.updateMonday(mondayId);

}

},{

text: 'Cancel',

role: 'cancel',

handler: () => {

console.log('Cancel clicked');

}

}

]

});

// Display Options

actionSheet.present();

}

updateMonday(mondayId){

let prompt = this.alertCtrl.create({

title: 'Update ',

message: "Update change",

inputs: [

{

name: 'name',

placeholder: 'Subject'

},
{

name: 'type',

placeholder: 'type'

},
{

name: 'time',

placeholder: 'Time'

},{
name: 'room',

placeholder: 'Room'

}

],

buttons: [

{

text: 'Cancel',

handler: data => {

console.log('Cancel clicked');

}

},

{

text: 'Save',

handler: data => {

// Check if user inputted a post subject, time and date. If not then do not save assigment.

if(data.name == "" || data.type == "" || data.time == "" || data.room == "") {

let errorPrompt = this.alertCtrl.create({

title: 'ERROR!',

message: "Please enter a Subject, Time and Room!",

buttons: [

{

text: 'Cancel',

handler: data => {
  console.log('Cancel clicked');

}

}

]})

errorPrompt.present();

return false;

} else {

this.mondays.update(mondayId, {

name: data.name,
type: data.type,
time: data.time,
room: data.room

});

}

}

}

]

});

prompt.present();

}


  //////////////////////////////////////////
  
  //Function that push data to Tuesday Timetable
  addToTuesday(name, type, time, room){
    this.tuesdays.push({
      name: name,
      type: type,
      time: time,
      room: room
    });
  }//addToTuesday
  //////////////////////////////////
 OptionsTuesday(tuesdayId) {

let actionSheet = this.actionSheetCtrl.create({

title: 'What do you want to do ?',

buttons: [

{

text: 'Delete ',

role: 'destructive',

handler: () => {

console.log("Deleting... " + tuesdayId);

this.tuesdays.remove(tuesdayId);

}

},{

text: 'Update ',

handler: () => {

this.updateTuesday(tuesdayId);

}

},{

text: 'Cancel',

role: 'cancel',

handler: () => {

console.log('Cancel clicked');

}

}

]

});

// Display Options

actionSheet.present();

}

updateTuesday(tuesdayId){

let prompt = this.alertCtrl.create({

title: 'Update ',

message: "Update change",

inputs: [

{

name: 'name',

placeholder: 'Subject'

},
{

name: 'type',

placeholder: 'type'

},
{

name: 'time',

placeholder: 'Time'

},{
name: 'room',

placeholder: 'Room'

}

],

buttons: [

{

text: 'Cancel',

handler: data => {

console.log('Cancel clicked');

}

},

{

text: 'Save',

handler: data => {

// Check if user inputted a post subject, time and date. If not then do not save assigment.

if(data.name == "" || data.type == "" || data.time == "" || data.room == "") {

let errorPrompt = this.alertCtrl.create({

title: 'ERROR!',

message: "Please enter a Subject, Time and Room!",

buttons: [

{

text: 'Cancel',

handler: data => {
  console.log('Cancel clicked');

}

}

]})

errorPrompt.present();

return false;

} else {

this.tuesdays.update(tuesdayId, {

name: data.name,
type: data.type,
time: data.time,
room: data.room

});

}

}

}

]

});

prompt.present();

}

  ////////////////////////////////////////

  //Function that push data to Wednesday Timetable
  addToWednesday(name,type, time, room){
    this.wednesdays.push({
      name: name,
      type: type,
      time: time,
      room: room
    });
  }//addtoWednesday
   //////////////////////////////////
 OptionsWednesday(wednesdayId) {

let actionSheet = this.actionSheetCtrl.create({

title: 'What do you want to do ?',

buttons: [

{

text: 'Delete ',

role: 'destructive',

handler: () => {

console.log("Deleting... " + wednesdayId);

this.wednesdays.remove(wednesdayId);

}

},{

text: 'Update ',

handler: () => {

this.updateWednesday(wednesdayId);

}

},{

text: 'Cancel',

role: 'cancel',

handler: () => {

console.log('Cancel clicked');

}

}

]

});

// Display Options

actionSheet.present();

}

updateWednesday(wednesdayId){

let prompt = this.alertCtrl.create({

title: 'Update ',

message: "Update change",

inputs: [

{

name: 'name',

placeholder: 'Subject'

},
{

name: 'type',

placeholder: 'type'

},
{

name: 'time',

placeholder: 'Time'

},{
name: 'room',

placeholder: 'Room'

}

],

buttons: [

{

text: 'Cancel',

handler: data => {

console.log('Cancel clicked');

}

},

{

text: 'Save',

handler: data => {

// Check if user inputted a post subject, time and date. If not then do not save assigment.

if(data.name == "" || data.type == "" || data.time == "" || data.room == "") {

let errorPrompt = this.alertCtrl.create({

title: 'ERROR!',

message: "Please enter a Subject, Time and Room!",

buttons: [

{

text: 'Cancel',

handler: data => {
  console.log('Cancel clicked');

}

}

]})

errorPrompt.present();

return false;

} else {

this.wednesdays.update(wednesdayId, {

name: data.name,
type: data.type,
time: data.time,
room: data.room

});

}

}

}

]

});

prompt.present();

}

  ////////////////////////////////////////

  
  //Function that push data to Thursday Timetable
  addToThursday(name,type, time, room){
    this.thursdays.push({
      name: name,
       type: type,
      time: time,
      room: room
     
    });
  }//addtoThursday
   //////////////////////////////////
 OptionsThursday(thursdayId) {

let actionSheet = this.actionSheetCtrl.create({

title: 'What do you want to do ?',

buttons: [

{

text: 'Delete ',

role: 'destructive',

handler: () => {

console.log("Deleting... " + thursdayId);

this.thursdays.remove(thursdayId);

}

},{

text: 'Update ',

handler: () => {

this.updateThursday(thursdayId);

}

},{

text: 'Cancel',

role: 'cancel',

handler: () => {

console.log('Cancel clicked');

}

}

]

});

// Display Options

actionSheet.present();

}

updateThursday(thursdayId){

let prompt = this.alertCtrl.create({

title: 'Update ',

message: "Update change",

inputs: [

{

name: 'name',

placeholder: 'Subject'

},
{

name: 'type',

placeholder: 'type'

},
{

name: 'time',

placeholder: 'Time'

},{
name: 'room',

placeholder: 'Room'

}

],

buttons: [

{

text: 'Cancel',

handler: data => {

console.log('Cancel clicked');

}

},

{

text: 'Save',

handler: data => {

// Check if user inputted a post subject, time and date. If not then do not save assigment.

if(data.name == "" || data.type == "" || data.time == "" || data.room == "") {

let errorPrompt = this.alertCtrl.create({

title: 'ERROR!',

message: "Please enter a Subject, Time and Room!",

buttons: [

{

text: 'Cancel',

handler: data => {
  console.log('Cancel clicked');

}

}

]})

errorPrompt.present();

return false;

} else {

this.thursdays.update(thursdayId, {

name: data.name,
type: data.type,
time: data.time,
room: data.room

});

}

}

}

]

});

prompt.present();

}

  ////////////////////////////////////////


  //Function that push data to Friday Timetable
  addToFriday(name, type, time, room){
    this.fridays.push({
      name: name,
      type: type,
      time: time,
      room: room
    });
  }//addToFriday

  OptionsFriday(fridayId) {

let actionSheet = this.actionSheetCtrl.create({

title: 'What do you want to do ?',

buttons: [

{

text: 'Delete ',

role: 'destructive',

handler: () => {

console.log("Deleting... " + fridayId);

this.fridays.remove(fridayId);

}

},{

text: 'Update ',

handler: () => {

this.updateFriday(fridayId);

}

},{

text: 'Cancel',

role: 'cancel',

handler: () => {

console.log('Cancel clicked');

}

}

]

});

// Display Options

actionSheet.present();

}

updateFriday(fridayId){

let prompt = this.alertCtrl.create({

title: 'Update ',

message: "Update change",

inputs: [

{

name: 'name',

placeholder: 'Subject'

},
{

name: 'type',

placeholder: 'type'

},
{

name: 'time',

placeholder: 'Time'

},{
name: 'room',

placeholder: 'Room'

}

],

buttons: [

{

text: 'Cancel',

handler: data => {

console.log('Cancel clicked');

}

},

{

text: 'Save',

handler: data => {

// Check if user inputted a post subject, time and date. If not then do not save assigment.

if(data.name == "" || data.type == "" || data.time == "" || data.room == "") {

let errorPrompt = this.alertCtrl.create({

title: 'ERROR!',

message: "Please enter a Subject, Time and Room!",

buttons: [

{

text: 'Cancel',

handler: data => {
  console.log('Cancel clicked');

}

}

]})

errorPrompt.present();

return false;

} else {

this.fridays.update(fridayId, {

name: data.name,
type: data.type,
time: data.time,
room: data.room

});

}

}

}

]

});

prompt.present();

}

  ////////////////////////////////////////


  
addModuleMon(){
  let prompt = this.alertCtrl.create({
    title: 'Monday',
    message: "Add your lectures",
    inputs: [
      {
        name: 'name',
        placeholder: 'Module name',
      },{
        name: 'time',
        placeholder: 'Time',
      },{
        name: 'room',
        placeholder: 'Room',
      }
    ],
    buttons: [

{

text: 'Cancel',

handler: data => {

console.log(' Cancelled!');

}

},

{

text: 'Save',

handler: data => {

this.mondays.push({

name: data.name,

time: data.time,

room: data.room

});

}
}

]

})
prompt.present();
}





 
 




  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }
   goBackToHomePage() {
    	this.navCtrl.pop(HomePage);
  }//goBackToHomePage()
  

}
