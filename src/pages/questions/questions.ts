import { Component, OnInit } from '@angular/core';
import { NavParams,  } from 'ionic-angular';
import { Question } from '../../data/question.interface';





@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage implements OnInit {
  questionGroup: {category: string, questions: Question[], icon: string,};

constructor(private navParams: NavParams,
            ) {

}
ngOnInit(){
  this.questionGroup = this.navParams.data;
}

//ionViewDidLoad() {
//  this.quoteGroup = this.navParams.data; add elvis operator in template to use this approach
//}
}



