import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:5000/admin/"
  private userUrl="http://localhost:5000/"

  getuser(){
    return this.http.get(`${this.baseUrl}users`).pipe(delay(400));
  }
  deleteUser(id:string){
    console.log(this.http.get(`${this.baseUrl}deleteuser?id=${id}`));
    return this.http.get(`${this.baseUrl}deleteuser?id=${id}`)
    
    
  }
  getprofile(){
    
    return this.http.get(`${this.userUrl}user`,{withCredentials:true})
  }
  

  constructor(private http:HttpClient) { }
}
