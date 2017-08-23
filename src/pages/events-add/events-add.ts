import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, Tabs, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EventsProvider } from '../../providers/events/events';

/*@Component({
  template: `
    <ion-header>
      <ion-navbar>
      <ion-title>New event</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
    <form [formGroup]="eventsadd" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Name</ion-label>
        <ion-input type="text" formControlName="data[Event][name]"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea formControlName="data[Event][description]" ></ion-textarea>
      </ion-item>
      <ion-item>
       <ion-label>Start date</ion-label>
       <ion-datetime displayFormat="DD-MM-YYYY HH:mm" formControlName="data[Event][startdate]" ></ion-datetime>
      </ion-item>
      <ion-item>
       <ion-label>End date</ion-label>
       <ion-datetime displayFormat="DD-MM-YYYY HH:mm" formControlName="data[Event][enddate]" ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Address</ion-label>
        <ion-input type="text" formControlName="data[Event][address]" ></ion-input>
      </ion-item>
      
      <button ion-button type="submit" [disabled]="!eventsadd.valid">Submit</button>
    </form>
    </ion-content>
  `
})
*/
/**
 * Generated class for the EventsAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
 selector: 'page-events-add',
  templateUrl: 'events-add.html',
})
export class EventsAddPage {
  tab:Tabs;
  private eventsadd : FormGroup;
  createSuccess = false;

  constructor(private nav: NavController, private formBuilder: FormBuilder, private events: EventsProvider,private alertCtrl: AlertController ) {
    this.tab = this.nav.parent;
    this.eventsadd = this.formBuilder.group({
      "name": ['', Validators.required],
      "description": [''],
      "startdate": [''],
      "enddate": [''],
      "address": ['']
    });
        /*
        {"data[Event][name]":"teste",
         "data[Event][description]":"tete\nfsdffdsfsdfsdf\nssdfssdfsfdssfd",
          "data[Event][startdate]":"2017-03-03T00:00:00Z",
          "data[Event][enddate]":"2017-03-31T00:00:00Z",
          "data[Event][address]":"adre"}
        */
    //[ngModelOptions]="{standalone: true}"
  }
  logForm(){
    console.log(JSON.stringify(this.eventsadd.value));
    this.events.event_add(JSON.stringify(this.eventsadd.value)).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Event created.");
        this.eventsadd.reset();
      } else {
        this.showPopup("Error", "Problem creating event.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsAddPage');
  }
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.tab.select(1);
            }
          }
        }
      ]
    });
    alert.present();
  }
}
