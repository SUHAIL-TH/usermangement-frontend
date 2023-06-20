import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  constructor(private http:HttpClient,private router:Router){}

  logoutadmin(){
    this.http.post("http://localhost:5000/admin/logout",{},).subscribe((res)=>this.router.navigate(['/admin/users']))
  }

}
