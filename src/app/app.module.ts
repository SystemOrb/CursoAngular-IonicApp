import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { navBarComponent } from '../pages/navbar/navbar';
import { ListComponent } from '../pages/lista/lista';
import { listBuyed } from '../pages/lista_finalizada/list-finished';
import { listCreator } from '../pages/listCreator/listCreator';
//Service
import { ServiceListCreator } from './services/listCreator.service';

//pipe
import { labelPipe } from './pipes/label.pipe';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListComponent,
    listBuyed,
    navBarComponent,
    listCreator,
    labelPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ListComponent,
    listBuyed,
    navBarComponent,
    listCreator
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceListCreator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
