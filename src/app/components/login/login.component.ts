import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Emitters } from '../emitters/emitter';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  form:FormGroup

  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router){
    
  }
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:"",
      email:"",
      password:""
    })


    this.http.get('http://localhost:5000/user',{
    withCredentials:true
   }).subscribe( 
    (res:any)=>{
    Emitters.authEmitter.emit(true)
    this.router.navigate(['/'])
   },
   (err)=>{
    
    Emitters.authEmitter.emit(false)
    
   })
  }
  ValidateEmail=(email:any)=>{
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.match(validRegex)){
      return true;
    }else{
      return false;
    }
  }

  submit(){
    let user=this.form.getRawValue()
    
    if(user.email=='',user.password==''){
      Swal.fire({
      icon: 'error',
      title: 'Please enter the fields',
      showConfirmButton: false,
      timer: 1500})
    }else if(!this.ValidateEmail(user.email)){
      Swal.fire({
        icon: 'error',
        title: 'Please enter valid email',
        showConfirmButton: false,
        timer: 1500})
     
    }else{
      this.http.post("http://localhost:5000/login",user,{
        withCredentials:true
      }).subscribe((res)=>this.router.navigate(["/"]),(err)=>{
        Swal.fire("Error",err.error.message,"error")
      })
      
    }
   

  }
  }

