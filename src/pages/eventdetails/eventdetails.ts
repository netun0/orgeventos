import { Component } from '@angular/core';
import { IonicPage,AlertController, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
/**
 * Generated class for the EventdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-eventdetails',
  templateUrl: 'eventdetails.html',
})
export class EventdetailsPage {
  id;
  name;
  startdate;
  enddate;
  address;
  createSuccess = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public usersprovider: UsersProvider, private alertCtrl: AlertController) {
    this.id = this.navParams.get('item').id;
    this.name = this.navParams.get('item').name;
    this.startdate = this.navParams.get('item').startdate;
    this.enddate = this.navParams.get('item').enddate;
    this.address = this.navParams.get('item').address;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailsPage');
  }
  invite(){
    this.usersprovider.clearusers();
    this.usersprovider.inviteusers(this.id);
    this.showPopup("Success", "All users invited.");
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
              //this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
