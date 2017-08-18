import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Events } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import {Jigsaw} from '../pages/jigsaw/jigsaw';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// importing custom services
import {Common} from "./../services/common.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    SettingsPage,
    AboutPage,
    Jigsaw
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    SettingsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Events,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Common
  ]
})
export class AppModule {}