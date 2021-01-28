import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { InsertItemComponent } from './insert-item/insert-item.component';
import { LogOutComponent } from './log-out/log-out.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrdersComponent } from './orders/orders.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SwitchAccountComponent } from './switch-account/switch-account.component';
import { TenderComponent } from './tender/tender.component';
import{FarmerModule} from './farmer/farmer.module'

const routes: Routes = [
  // {path: '', component: HomeComponent, children:[
  //   { path: 'page-1', component: MyProfileComponent },
  //   { path: 'page-2', component: OrdersComponent },
  //   { path: 'page-3', component: TenderComponent },
  //   { path: 'page-4', component: AddPostComponent },
  //   { path: 'page-5', component: RatingsComponent },
  //   { path: 'page-6', component: ChangePasswordComponent },
  //   { path: 'page-7', component: SwitchAccountComponent },
  //   { path: 'page-8', component: LogOutComponent },
  //   {path: 'page-9', component: InsertItemComponent},
  //   { path: 'farmer', loadChildren: "./farmer/farmer.module#FarmerModule" },

  // ]   }
  {path: 'farmer', loadChildren: () => import('./farmer/farmer.module').then(m => m.FarmerModule)},
  { path: 'order', component: OrdersComponent },
  { path: 'profile', component: MyProfileComponent },
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  { path: 'rating', component: RatingsComponent },
  { path: 'tender', component: TenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
