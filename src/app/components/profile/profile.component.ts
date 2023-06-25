import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadprofile } from 'src/app/state/user.action';
import { selecUserProfile } from 'src/app/state/user.selector';
import Swal from 'sweetalert2';
import { Emitters } from '../emitters/emitter';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  name: string;
  email: string;
  image: string;
  state: boolean = false;
  state1: boolean = true;
  selectedImage:any|File
  message:string

  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private store: Store
  ) {}
  user = this.store
    .select(selecUserProfile)
    .subscribe((data) => {this.name = data.name,
      this.email=data.email,
      this.image = data?.image
    if(data.image){
      this.state=true,
      this.state1=false
    }else{
      this.state=false,
      this.state1=true
    }});

  ngOnInit(): void {

    
    this.http.get('http://localhost:5000/user',{
    withCredentials:true
   }).subscribe( 
    (res:any)=>{
    
    Emitters.authEmitter.emit(true)
   },
   (err)=>{
    
    this.message="you are not logedin";
    Emitters.authEmitter.emit(false)
    this.route.navigate(['/'])
    
    
   })
    this.store.dispatch(loadprofile());
    this.form=this.formBuilder.group({
      image:['']
    })
  }

 
  uploadImage(files: any) {
    this.selectedImage=<File>files.files[0]
  }
  onsubmit():void {
    const formData=new FormData();
    formData.append('image',this.selectedImage,this.selectedImage.name)
    console.log((formData));
    console.log(this.selectedImage);
    this.http.post('http://localhost:5000/profile',formData,{
      withCredentials:true,
    }).subscribe((response:any)=>{
      Emitters.authEmitter.emit(true)
        this.store.dispatch(loadprofile())
        Emitters.authEmitter.emit(true)
      Swal.fire('Success', "Saved", "success")

    },(err)=>{
      Swal.fire('Error', err.error.message, "error")
    })

    
    
    

  }
  getImageUrl(image: string): string {
    console.log(`http://localhost:5000/public/user_images/${image}`);
    return `http://localhost:5000/public/user_images/${image}`;
   
    
  }
}

