import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form:FormGroup
  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router){

  }
  ngOnInit(): void {
  this.form=this.formBuilder.group({
      email: "",
      password: ""
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
    let admin=this.form.getRawValue();
    console.log(admin);
    
    if(admin.email==''|| admin.password==''){
      Swal.fire({
        icon: 'error',
        title: 'Please enter the fields',
        showConfirmButton: false,
        timer: 1500})




    }else if (!this.ValidateEmail(admin.email)){
      Swal.fire({
        icon: 'error',
        title: 'Please enter valid email',
        showConfirmButton: false,
        timer: 1500})

    }else{
      this.http.post("http://localhost:5000/admin/login",admin,{
        withCredentials:true
      }).subscribe((res)=>this.router.navigate(['/admin/dashboard']),(err)=>(Swal.fire("Error",err.error.message,"error")))
      
    }

  }

}
