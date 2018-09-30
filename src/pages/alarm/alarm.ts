import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


/*
  Generated class for the Alarm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {
  
  //Pass assigments data to Firebase
  assigments : FirebaseListObservable<any>;
  
  //Create constructors for navigation, firebase, Action Shhet and Alert Controler
  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public af: AngularFire,
  public actionSheetCtrl: ActionSheetController,
  public alertCtrl: AlertController,) {
    
    //Pass information about assigment to Firebase
    this.assigments = af.database.list('/assigment');
}//end constructor

//AddToList it's a function that pases the parameters, has a separate option that user can choose using ngModel.
addToList(type, subject, time, date){
    this.assigments.push({
      type: type,
      subject: subject,
      time: time,
      date: date
    });
  }//addToList

//addAssigment function also adds assigment as alert
  addAssigment(){
  let prompt = this.alertCtrl.create({
    title: 'Assigment',
    message: "Add new assigment",
    inputs: [
      {
        name: 'subject',
        placeholder: 'Subject name',
      },{
        name: 'time',
        placeholder: 'Time',
      },{
        name: 'date',
        placeholder: 'Date',
      }
    ],
    buttons: [
      {

        text: 'Cancel',

        handler: data => {

          console.log('Addition of new Assigment cancelled!');

        }

      },
      
       {

        text: 'Save',

        handler: data => {
          // Check if user inputted a subject time and date. If not then do not save assigmen.
          if(data.subject == "" || data.time == "" || data.date == "") {
            
            //Error alert
            let errorPrompt = this.alertCtrl.create({

              title: 'ERROR!',

              message: "Please enter a Subject and Time and date for this assigment!",

              buttons: [

                {
                  //Cancel assigment
                  text: 'Cancel',

                  handler: data => {

                    console.log('Cancel clicked');

                  }

                }

              ]})

              errorPrompt.present();

              return false;

            } else {
              //else push assigment
              this.assigments.push({

                subject: data.subject,

                time: data.time,

                date: data.date

              });

            }

          }

        }

        ]

      });

      prompt.present();

    }
    //This function allows user to delete or update assigment. Also is updating or deleting from firebase using assigment id.
    Options(assigmentId) {

      let actionSheet = this.actionSheetCtrl.create({

        title: 'What do you want to do with this asigment?',

        buttons: [
          
          {
            //Deliting
            text: 'Delete Assigment',

            role: 'destructive',

            handler: () => {

              console.log("Deleting... " + assigmentId);

              this.assigments.remove(assigmentId);
            
          }

          },{

            //Updating
            text: 'Update Assigment',

            handler: () => {

              this.updateAssigment(assigmentId);

            }

          },{
            //Canceling
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

      updateAssigment(assigmentId){

        let prompt = this.alertCtrl.create({

          title: 'Update Assigment',

          message: "Update change",

          inputs: [

            {

              name: 'subject',

              placeholder: 'Subject'

            },{

              name: 'time',

              placeholder: 'Time'

            },{
              name: 'date',

              placeholder: 'Date'

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

                  if(data.subject == "" || data.time == "" || data.date == "") {

                    let errorPrompt = this.alertCtrl.create({

                      title: 'ERROR!',

                      message: "Please enter a Subject, Time and Date!",

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
                        //else update assigment

                      } else {

                        this.assigments.update(assigmentId, {

                          subject: data.subject,

                          time: data.time,

                          date: data.date

                        });

                      }

                    }

                  }

                  ]

                });

                prompt.present();
                
              }
              
              ionViewDidLoad() {

                console.log('ionViewDidLoad AlarmPage');

              }

            }
