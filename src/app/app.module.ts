import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,  } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../pages/providers/auth-service';
import { ModlesPage } from '../pages/modles/modles'
import { QuestionsPage } from '../pages/questions/questions';
import { QuestionPage } from '../pages/question/question';
import { ModlePage } from '../pages/modle/modle';
import { ModlesServices } from '../services/modle';
import { QuestionService } from '../services/questions';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    QuestionsPage,
   QuestionPage,
    ModlesPage,
    ModlePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    QuestionsPage,
    QuestionPage,
     ModlesPage,
     ModlePage,
    
    
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ModlesServices,
    QuestionService,
  ]
})
export class AppModule {}
