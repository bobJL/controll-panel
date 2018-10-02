import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modle',
  templateUrl: 'modle.html'
})
export class ModlePage{
  person: string;
  text: string;
  constructor (private viewCtrl: ViewController,
               private navParams: NavParams) {}
  
  ionViewDidLoad() {
    this.person = this.navParams.get('title');
    this.text = this.navParams.get('description');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);

  }
}