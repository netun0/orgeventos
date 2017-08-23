import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/map';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EventsProvider {
  data1: any;
  constructor(public http: Http) {
    console.log('Hello EventsProvider Provider');
  }
 clearevents() {
    this.data1 = null;
 }
 events() {
    if (this.data1) {
      console.log("load data events");
      return Promise.resolve(this.data1);
    }
    return new Promise(resolve => {
      let headers = new Headers({
        'Content-Type': 'application/json',
        //'Bearer': this.globals.getGlobalToken()
          }); //.growner.com
      this.http.get('http://orgeventos.growner.com/events.json',{ headers: headers }).map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log(data);
          this.data1 = data;
          resolve(this.data1);
        });
    });
  }
 events_calendar() {
    if (this.data1) {
      console.log("load data events");
      return Promise.resolve(this.data1);
    }
    return new Promise(resolve => {
      let headers = new Headers({
        'Content-Type': 'application/json',
        //'Bearer': this.globals.getGlobalToken()
          }); //.growner.com
      this.http.get('http://orgeventos.growner.com/events/calendar.json',{ headers: headers }).map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log(data);
          this.data1 = data;
          resolve(this.data1);
        });
    });
  }
public event_add(body) {
          // At this point store the credentials to your backend!
          /*return Observable.create(observer => {
            observer.next(true);
            observer.complete();
          });*/
          return Observable.create(observer => {
            //let body = '{"User": {"username" : "'+credentials.username+'", email" : "'+credentials.email+'", "password" : "'+credentials.password+'"}}';
            let headers = new Headers({
              'Content-Type': 'application/json'
            }); //multipart/form-data
            //, 'Authorization': this.body

            headers.append('Accept','application/json');
            //headers.append('Content-Type','application/x-www-form-urlencoded');
            let options = new RequestOptions({
              headers: headers
            });
            let url      : string      = "http://orgeventos.growner.com/events/add.json";
            this.http.post(url,body,options)
                            .map(res => res.json())
                            .subscribe(data => {
                                  console.log(data);
                                  this.data1 = data;
                                  //let jsonObject = data.ret;
                                  //this.currentUser = new User(jsonObject.name, jsonObject.email);
                                  observer.next(this.data1);
                                  observer.complete();
                          },
            error => {
                  console.log(error);
                  observer.next(false);
                  observer.complete();
            }, 
            () => console.log("Finished")
            );
          });
  }
}
