import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.css'],
})
export class AdminCreateUserComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
    });
  }
  ValidateEmail = (email: any) => {
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };
  submit() {
    let user = this.form.getRawValue();
    if (user.name == '' || user.email == '' || user.password == '') {
      Swal.fire({
        icon: 'error',
        title: 'Please enter the fields',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!this.ValidateEmail(user.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Please enter valid email',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.http.post('http://localhost:5000/admin/createuser', user,{
        withCredentials:true
      }).subscribe((res)=>this.router.navigate(['/admin/users']),
      (err)=>{
        Swal.fire("Error",err.error.message,"error")
      })
    }
  }
}
