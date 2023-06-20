import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveUser, loaduser } from '../state/user/user.action';
import { Router } from '@angular/router';
import { selectLoaded, selectLoading, selectUsers } from '../state/user/user.selector';


@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
constructor( private store:Store,private router:Router){}

  users$=this.store.select(selectUsers)
  loading$=this.store.select(selectLoading)
  loaded$=this.store.select(selectLoaded)
  ngOnInit(): void {
  this.store.dispatch(loaduser())
  }
  editUser(id:string){
   
    this.router.navigate(['/admin/edituser',id])

  }
  removeUser(id:string){

    
    this.store.dispatch(RemoveUser({id}))

  }
  createUser(){
    this.router.navigate(['/admin/admincreateuser'])

  }
  

}
