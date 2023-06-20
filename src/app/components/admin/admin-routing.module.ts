import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AdminCreateUserComponent } from './admin-create-user/admin-create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';

const routes: Routes = [
  { path: 'admin', component: AdminLoginComponent },
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: AdminDashbordComponent },
      { path: 'admincreateuser', component: AdminCreateUserComponent },
      { path: 'edituser/:id', component: EditUserComponent },
      { path: 'users', component: AdminUserListComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashbordComponent,
    AdminCreateUserComponent,
    AdminUserListComponent,
    EditUserComponent,
    AdminNavComponent,
  ],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, CommonModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
