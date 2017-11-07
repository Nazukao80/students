import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  activePage = new Subject();
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'Login', active: false },
      { icon: 'Student', active: false}
    ];
    this.pages = [
      { title: 'Home', component: 'HomePage', active: true, icon: 'home' },
      { title: 'Login', component: 'LoginPage', active: false, icon: 'archive' },
      { title: 'Student', component: 'StudentPage', active: false, icon: 'angular' }
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menuCtrl.enable(false, 'right');
    });
  }
  openPage(component) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    /* this.nav.setRoot(page.component) */;
    this.nav.push(component);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}

