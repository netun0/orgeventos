import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsAddPage } from './events-add';

@NgModule({
  declarations: [
    EventsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsAddPage),
  ],
  exports: [
    EventsAddPage
  ]
})
export class EventsAddPageModule {}
