import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TenderComponent } from './tender/tender.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SwitchAccountComponent } from './switch-account/switch-account.component';
import { LogOutComponent } from './log-out/log-out.component';
import { RatingsComponent } from './ratings/ratings.component';
import { InsertItemComponent } from './insert-item/insert-item.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { TitlebarComponent } from './CommonElement/titlebar/titlebar.component';
import { SidenavbarComponent } from './CommonElement/sidenavbar/sidenavbar.component';
import { FarmerModule } from './farmer/farmer.module';
import { ViewitemsComponent } from './viewitems/viewitems.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyProfileComponent,
    OrdersComponent,
    TenderComponent,
    AddPostComponent,
    ChangePasswordComponent,
    SwitchAccountComponent,
    LogOutComponent,
    RatingsComponent,
    InsertItemComponent,
    //TitlebarComponent,
    SidenavbarComponent,
    ViewitemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FarmerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
