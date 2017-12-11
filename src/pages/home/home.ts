import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text: string = "Hello World";
  public items: Array<{ name: string, color: string }>;
  public item: any;
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    this.items = [{ name: "fred", color: "red" },
    { name: "john", color: "gray" },
    { name: "malcom", color: "green" }];
  }
}
