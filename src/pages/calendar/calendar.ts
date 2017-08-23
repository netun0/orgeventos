import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Globals } from '../../providers/globals';
//import { Observable } from 'rxjs/Observable';
//import { Http, Headers, RequestOptions} from '@angular/http';
//import 'rxjs/add/operator/map';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
//import { EventsProvider } from '../../providers/events/events';
/*

// ** https://thielcole.github.io/ionic2/2017/02/03/Ionic2-Calendar.html
// ** https://github.com/mattlewis92/angular-calendar

export interface CalendarEvent {
  start: Date;
  end?: Date;
  title: string;
  color: EventColor;
  actions?: EventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
}


export interface EventColor {
  primary: string;
  secondary: string;
}

export interface EventAction {
  label: string;
  cssClass?: string;
  onClick({event}: {event: CalendarEvent}): any;
}
*/

/**
 * Generated class for the CalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

interface Event {
  title: string, 
  start: Date,  
  end: Date, 
  color: any
}

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage implements OnInit {
	public date: Date = new Date(Date.now());
	public date2: Date = new Date(Date.now());
	days_label: Array<string> = [
    'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'
  ];


  //public events$: Observable<Array<CalendarEvent<{event: Event}>>>; //title: string, start: Date,  end: Date, color: any
  public calEvents: Array<CalendarEvent<{}>>;
  //public calEvents: CalendarEvent;

  public colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public globals: Globals) { //,private http: Http, public eventsprovider: EventsProvider

  }

  ngOnInit(): void {
    this.fetchEvents();
  }

fetchEvents(): void {
   this.calEvents = new CalendarEvent(this.globals.getGlobalEvents());
  /*    this.calEvents = [];
    this.eventsprovider.events_calendar()
    .then(data1 => {
         for (let i = 0; i < data1.events.length; i++) {
              this.calEvents.push({
                title: data1.events[i].Event.title,
                start: new Date(data1.events[i].Event.start),
                end: new Date(data1.events[i].Event.end),
                color: this.colors.red
              });
          }
      });
     //this.calEvents[] = this.items;
    console.log(this.calEvents);*/
    

    // this.calEvents$ = this.eventsprovider.events_calendar()
   /* let headers = new Headers({
        'Content-Type': 'application/json',
        //'Bearer': this.globals.getGlobalToken()
          });
    this.events$ = this.http
      .get('http://orgeventos.growner.com/events/calendar.json', { headers: headers })
      .map(res => res.json())
      .map(({ results }: { results: Event[] }) => {
        
        return results.map((event: Event) => {
          //console.log(event.title);
          return {
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end),
            color: this.colors.red,
            meta: {
              event
            }
          };
          //return null;
        });
      });
*/
     //this.calEvents[] = this.items;
    //console.log(this.events$);



  }


  /*public event: CalendarEvent = {
    start: this.date,
    title: 'Event!',
    color: this.colors.red
  }
  public calEvents: CalendarEvent[] = [this.event, this.event];

public calEvents: CalendarEvent[] = [{
    start: this.date,
    title: 'Event!',
    color: this.colors.red
  },
  {
	start: new Date('2017-08-15T03:00:00.000Z'), //subDays(startOfDay(new Date()), 1)
    end: new Date('2017-08-16T00:00:00.000Z'), //addDays(new Date(), 1)
	title: 'teste',
	color: this.colors.blue,
	//actions: this.actions
  }];
*/



  //public calEvents: CalendarEvent[] = this.globbals.getGlobalEvents();
  //constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.date)) {
      if ((isSameDay(this.date, date)) || events.length === 0) {
        //this.activeDayIsOpen = false;
      } else {
        //this.activeDayIsOpen = true;
        this.date = date;
      }
    }
  }
}
