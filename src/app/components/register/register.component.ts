import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import {  Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit {
  
  form:FormGroup

  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router){
    
  }

  ngOnInit():void{
    this.form=this.formBuilder.group({
      name:"",
      email:"",
      password:""
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
  submit():void{
    let user=this.form.getRawValue()
    
    if(user.name==''||user.email=='',user.password==''){
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
      this.http.post("http://localhost:5000/register",user,{
        withCredentials:true
      }).subscribe(()=>this.router.navigate(['/']),(err)=>{
        Swal.fire({
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 1500})
      })
    }
   

  }

}
