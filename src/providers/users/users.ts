import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersProvider {
 data1: any;
  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }
 clearusers() {
    this.data1 = null;
 }
 users() {
    if (this.data1) {
      return Promise.resolve(this.data1);
    }
    return new Promise(resolve => {
      let headers = new Headers({
        'Content-Type': 'application/json',
        //'Bearer': this.globals.getGlobalToken()
          });
      this.http.get('http://orgeventos.growner.com/users.json',{ headers: headers }).map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log(data);
          this.data1 = data;
          resolve(this.data1);
        });
    });
  }
 inviteusers(id) {
    if (this.data1) {
      return Promise.resolve(this.data1);
    }
    return new Promise(resolve => {
      let headers = new Headers({
        'Content-Type': 'application/json',
        //'Bearer': this.globals.getGlobalToken()
          });
      this.http.get('http://orgeventos.growner.com/eventusers/addalluserstoevent/'+id+'.json',{ headers: headers }).map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log(data);
          this.data1 = data;
          resolve(this.data1);
        });
    });
  }
}
