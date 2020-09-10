import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
