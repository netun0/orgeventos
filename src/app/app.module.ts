import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsAddPage } from '../pages/events-add/events-add';
import { EventsPage } from '../pages/events/events';
import { CalendarPage } from '../pages/calendar/calendar';
import { EventdetailsPage } from '../pages/eventdetails/eventdetails';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

//import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AuthService } from '../providers/auth-service/auth-service';
import { Storage } from "@ionic/storage";
import { Globals } from '../providers/globals';
import { EventsProvider } from '../providers/events/events';
import { UsersProvider } from '../providers/users/users';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function provideStorage() {
 return new Storage( { name: '__mydb' } /* optional config */);
}
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    HomePage,
    MainPage,
    TabsPage,
    EventsAddPage,
    EventsPage,
    CalendarPage,
    EventdetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    CalendarModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    HomePage,
    CalendarPage,
    MainPage,
    TabsPage,
    EventsAddPage,
    EventsPage,
    EventdetailsPage

  ],
  providers: [
    Globals,
    StatusBar,
    SplashScreen,   
    File,
    Transfer,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: Storage, useFactory: provideStorage },
    AuthService,
    EventsProvider,
    UsersProvider
  ]
})
export class AppModule {}
