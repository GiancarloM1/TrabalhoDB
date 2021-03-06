import { SaboresProvider } from './../providers/sabores';
import { TamanhosProvider } from './../providers/tamanhos';

import { HttpProvider } from './../providers/http';
import { LoginProvider } from './../providers/login';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { TamanhosPage } from './../pages/tamanhos/tamanhos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Messages} from '../providers/messages';
import {Toasted} from '../providers/toast';
import { EnderecoPage } from '../pages/endereco/endereco';
import { CidadesProvider } from '../providers/cidades';
import { BairrosProvider } from '../providers/bairros';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TamanhosPage,
    EnderecoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TamanhosPage,
    EnderecoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toasted,
    LoginProvider,
    HttpProvider,
    TamanhosProvider,
    SaboresProvider,
    CidadesProvider,
    BairrosProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
