import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  form: FormGroup;
  userName: string;
  email: string;
  userId: string | null;
 

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.userId = this.router.snapshot.paramMap.get('id');
    this.getUserData(this.userId as string);

    this.form=this.formBuilder.group({
      name:this.userName,
      email:this.email
    })
  }
  validateEmail = (email: any) => {
    var validRegex = '^[a-zA-Z0-9.!#$%$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$'
    if (email.match(validRegex)) {
      console.log(email);
      return true;

    } else {
      return false;
    }
  }

  submit():void {
    const user=this.form.getRawValue()
    user.id=this.userId
    if(user.name==""||user.email==""){
      Swal.fire({
        icon: 'error',
        title: 'Please enter the fields',
        showConfirmButton: false,
        timer: 1500})
    }else{
      this.http.post("http://localhost:5000/admin/edituser",user,{
        withCredentials:true
      }).subscribe((res)=>this.route.navigate(["/admin/users"]),(err)=>{
        Swal.fire("Error",err.error.message,"error")
      })
    }

  }


  getUserData(id: string) {
    this.http.get(`http://localhost:5000/admin/editDetails?id=${id}` , {withCredentials : true})
    .subscribe((response:any)=>{
      this.userName=response.name
      this.email=response.email
    })
  }
}
