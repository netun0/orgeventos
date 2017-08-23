import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventdetailsPage } from '../eventdetails/eventdetails';
import { EventsProvider } from '../../providers/events/events';
import { EventsAddPage } from '../events-add/events-add';
import { CalendarPage } from '../calendar/calendar';
import { Globals } from '../../providers/globals';
/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
  providers: [EventsProvider]
})
export class EventsPage {

  public selectedItem: any;
  //icons: string[];
  public items: Array<{id: number, name: string, startdate: string, enddate: string, address: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventsprovider: EventsProvider, public globals: Globals) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(EventdetailsPage, {
      item: item
    });
  }
ionViewWillEnter() {
	this.eventsprovider.clearevents();
	console.log('ionViewWillEnter EventsPage');
    this.items = [];
    this.eventsprovider.events()
    .then(data1 => {
         for (let i = 0; i < data1.events.length; i++) {
              this.items.push({
                id: data1.events[i].Event.id,
                name: data1.events[i].Event.name,
                startdate: data1.events[i].Event.startdate,
                enddate: data1.events[i].Event.enddate,
                address: data1.events[i].Event.address
                //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
              });
          }
      });
    this.globals.setGlobalEvents();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
  addnew() {
  	this.navCtrl.push(EventsAddPage);
  }
  showcalendar() {
    this.navCtrl.push(CalendarPage);
  }
}
