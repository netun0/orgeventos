import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EventsProvider } from 'events/events';

@Injectable()
export class Globals {
  public token:any;
 // public calEvents: Array<CalendarEvent<{}>>;
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
  //public calEvents: Array<{title: string, start: Date,  end: Date, color: any}>;
  public calEvents: Array<CalendarEvent<{}>>;
  constructor(
    public events: Events,
    public storage: Storage,
    public eventsprovider: EventsProvider
  ) {}

/*	getToken(): Promise<string> {
		return this.storage.get('token').then((value) => {
			this.token = value;
			return value;
		});
	};
*/
  setGlobalToken(value) {
    this.token = value;
  }

  getGlobalToken() {
    return this.token;
  }

  setGlobalEvents() {
    this.calEvents = [];
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
    console.log(this.calEvents);
  }

  getGlobalEvents() {
    return this.calEvents;
  }

 /* _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public events: Events,
    public storage: Storage
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  };

  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };
  */
}
