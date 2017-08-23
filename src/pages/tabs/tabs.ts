import { Component } from '@angular/core';
import { EventsPage } from '../events/events';
//import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MainPage } from '../main/main';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
  tab2Root = EventsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
