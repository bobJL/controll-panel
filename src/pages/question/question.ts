import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage{
  question: string;
  text: string;
  constructor (private viewCtrl: ViewController,
               private navParams: NavParams) {}
  
  ionViewDidLoad() {
    this.question = this.navParams.get('question');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);

  }
}