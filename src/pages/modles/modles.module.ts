import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModlesPage } from './modles';

@NgModule({
  declarations: [
    ModlesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModlesPage),
  ],
})
export class ModlesPageModule {}
