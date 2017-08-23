import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	public items: Array<{id: number, name: string, email: string }>;

	constructor(public navCtrl: NavController, public usersprovider: UsersProvider) {

	}
	ionViewWillEnter() {
		this.usersprovider.clearusers();
		console.log('ionViewWillEnter EventsPage');
	    this.items = [];
	    this.usersprovider.users()
	    .then(data1 => {
	         for (let i = 0; i < data1.users.length; i++) {
	              this.items.push({
	                id: data1.users[i].User.id,
	                name: data1.users[i].User.name,
	                email: data1.users[i].User.email
	                //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
	              });
	          }
	      });
	}
}
