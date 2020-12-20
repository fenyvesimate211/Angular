import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginlistComponent} from './loginlist/loginlist.component';
import {AddloginComponent} from './addlogin/addlogin.component';
import {EditloginComponent} from './editlogin/editlogin.component';
import {ViewloginComponent} from './viewlogin/viewlogin.component';

const routes: Routes = [
  {path: '', component: LoginlistComponent},
  {path: 'addlogin', component: AddloginComponent},
  {path: 'editlogin/:id', component: EditloginComponent},
  {path: 'editlogin', component: EditloginComponent},
  {path: 'viewlogin', component: ViewloginComponent},
  {path: 'viewlogin/:id', component: ViewloginComponent},
  {path: 'loginlist', component: LoginlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
