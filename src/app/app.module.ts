import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {ChartsModule} from 'ng2-charts'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { TabsPage } from '../pages/tabs/tabs';
import { RelatoriosPage } from '../pages/relatorios/relatorios';


import { TarefasProvider } from '../providers/tarefas/tarefas';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig ={
    apiKey: "AIzaSyDjow_28eaxZ4Hn98RXlH1xTzpUyb5ABR8",
    authDomain: "apptarefas-8afd6.firebaseapp.com",
    databaseURL: "https://apptarefas-8afd6.firebaseio.com",
    projectId: "apptarefas-8afd6",
    storageBucket: "apptarefas-8afd6.appspot.com",
    messagingSenderId: "973352525700"

}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TarefaPage,
    TabsPage,
    RelatoriosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TarefaPage,
    TabsPage,
    RelatoriosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefasProvider
  ]
})
export class AppModule {}
