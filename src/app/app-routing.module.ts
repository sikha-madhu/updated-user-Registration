import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
const routes: Routes = [
  { path: 'display-data', component: DisplayDataComponent },
  { path:'' ,component: UserRegisterationComponent },
  { path:'**' ,component: UserRegisterationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
