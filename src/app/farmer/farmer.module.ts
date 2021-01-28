import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddorderComponent } from './addorder/addorder.component';
import { RouterModule } from '@angular/router';
import {TitlebarComponent} from './../CommonElement/titlebar/titlebar.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TitlebarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'addorder', component: AddorderComponent },
      

 
  ])
  ],
  exports:[TitlebarComponent]
})
export class FarmerModule { }
