import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  message: string="";
  
  constructor(private http:HttpClient, private router:Router){

  }
  ngOnInit(): void {
   this.http.get('http://localhost:5000/user',{
    withCredentials:true
   }).subscribe( 
    (res:any)=>{
    this.message = `Hi ${res.name}`
    Emitters.authEmitter.emit(true)
   },
   (err)=>{
    
    this.message="you are not logedin";
    Emitters.authEmitter.emit(false)
    
   })
  }
}
