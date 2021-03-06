import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { StudentProvider } from '../providers/student/student.provider';
import { StudentPageModule } from '../pages/student/student.module';
import { HttpModule } from '@angular/http';
import { ComponentsModule } from '../components/components.module';
//import { BROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser/src/browser';



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    HomePageModule,
    LoginPageModule,
    StudentPageModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    //BROWSER_SANITIZATION_PROVIDERS,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentProvider
  ]
})
export class AppModule {}
