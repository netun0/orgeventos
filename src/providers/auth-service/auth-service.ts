import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/map';
import { ErrorHandler } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/*
export class MyExceptionHandler implements ErrorHandler {
  handleError(error) {
    // do something with the error
  }
}
*/
export class User {
  //id: string;
  name: string;
  //document: string;
  //document_type: string;
  //username: string;
  //gender: string;
  //role: string;
  //created: string;
  //modified: string;
  email: string;
  //role_id: string;
  //status: string;
  //phone:string;
  //phon2: string;
  //birth_dt: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    //this.username = username;
    /*this.document = name;
    this.document_type = email;
    
    this.gender = gender;
    this.role = role;
    this.created = created;
    this.modified = modified;
    this.email = email;*/

  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  data: any;

  constructor(private http: Http, private storage: Storage,private sanitizer: DomSanitizer) {

  }
  clearlogin() {
    this.data = null;
  }
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
      //; charset=UTF-8
          //let body = '{"User": {"email" : "'+credentials.email+'", "password" : "'+credentials.password+'"}}';
          let body = 'data[User][email]='+credentials.email+'&data[User][password]=' + credentials.password;
 
          let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
          }); //multipart/form-data
          //, 'Authorization': this.body
          //headers.append('Accept','application/json');
          //headers.append('Accept','application/json');
          //headers.append('Content-Type','application/x-www-form-urlencoded');
          let options = new RequestOptions({
            headers: headers
          });
          let url      : string      = "http://orgeventos.growner.com/users/login.json";
          this.http.post(url,body,options)
                          .map(res => res.json())
                          .subscribe(data => {
                                this.data = data;
                                console.log(data);
                                if (data.status == 400) {
                                    observer.next(false);
                                    observer.complete();
                                }else {
                                let jsonObject = data.user;
                                //$scope.token = data.token;
                                //localStorage.setItem("token", $scope.token);
                                //$scope.token = localStorage.getItem("token");
                                //if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== ""){//go ahead and authenticate them without getting a new token.}
                                //localStorage.setItem("token", "");
                                this.storage.set('token', data.token);
                                
                                this.currentUser = new User(jsonObject.name, jsonObject.email);
                                }
                                observer.next(data);
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
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
          // At this point store the credentials to your backend!
          /*return Observable.create(observer => {
            observer.next(true);
            observer.complete();
          });*/
          return Observable.create(observer => {
            //let body = '{"User": {"role": "customer", "name" : "'+credentials.username+'", email" : "'+credentials.email+'", "password" : "'+credentials.password+'"}}';
            let body = 'role=customer&name=' + credentials.username + '&email='+credentials.email+'&password=' + credentials.password;
            console.log(body);
            //"role": "customer",
            let headers = new Headers({
              'Content-Type': 'application/x-www-form-urlencoded'
            }); //multipart/form-data
            //, 'Authorization': this.body
            //application/json
            headers.append('Accept','application/json');
            //headers.append('Content-Type','application/x-www-form-urlencoded');
            let options = new RequestOptions({
              headers: headers
            });
            let url      : string      = "http://orgeventos.growner.com/users/add.json";
            this.http.post(url,body,options)
                            .map(res => res.json())
                            .subscribe(data => {
                                  this.data = data;
                                  //console.log(this.data);
                                  //let jsonObject = data.ret;
                                  //this.currentUser = new User(jsonObject.name, jsonObject.email);
                                  observer.next(data);
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
  /*public upload(image) {
    if (image.photo === null) {
      return Observable.throw("Invalid photo");
    } else {
      return Observable.create(observer => {
      //; charset=UTF-8
          //let body = '{"User": {"email" : "'+credentials.email+'", "password" : "'+credentials.password+'"}}';
          //let body = 'data[User][email]='+credentials.email+'&data[User][password]=' + credentials.password;
          let body = {
            image: this.sanitizer.bypassSecurityTrustUrl(image),
            name: userInfo.uid,
            folder: 'profileImages',
            email: userInfo.email
          }
          let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
          }); //multipart/form-data
          //, 'Authorization': this.body
          headers.append('Content-Type','multipart/form-data');
          //headers.append('Accept','application/json');
          //headers.append('Content-Type','application/x-www-form-urlencoded');
          let options = new RequestOptions({
            headers: headers
          });

          let url      : string      = "http://orgeventos/users/edit/12";
          this.http.post(url,body,options)
                          .map(res => res.json())
                          .subscribe(data => {
                                this.data = data;
                                console.log(data);
                                if (data.status == 400) {
                                    observer.next(false);
                                    observer.complete();
                                }else {
                                let jsonObject = data.user;
                                //$scope.token = data.token;
                                //localStorage.setItem("token", $scope.token);
                                //$scope.token = localStorage.getItem("token");
                                //if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== ""){//go ahead and authenticate them without getting a new token.}
                                //localStorage.setItem("token", "");
                                this.storage.set('token', data.token);
                                
                                this.currentUser = new User(jsonObject.name, jsonObject.email);
                                }
                                observer.next(data);
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
*/
    uploadProfileImage(image: string) {

        return new Promise(resolve => {
         // file: this.sanitizer.bypassSecurityTrustUrl(image),
        let pkg = {
            file: image,
            name: "tst.jpg",
            folder: 'users',
            type: "image/png",
           // email: userInfo.email
        }
         let headers = new Headers({
              'Content-Type': 'multipart/form-data'
         });  //application/x-www-form-urlencoded

        var dataToSubmit = {__ContentType : "image/jpeg", base64 : image};
        //file: {__ContentType : "image/jpeg", base64 : image},
        //console.log('pkg upload profile image', JSON.stringify(pkg));
        this.http.post('http://orgeventos/upload.php', pkg) //dataToSubmit, headers
           .subscribe( res => console.log('response from upload picture', res)); //JSON.stringify(res)

        })
    }

  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      //localStorage.setItem("token", "");
      this.storage.set('token', "");
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}