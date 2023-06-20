import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:5000/admin/"

  getuser(){
    return this.http.get(`${this.baseUrl}users`).pipe(delay(400));
  }
  deleteUser(id:string){
    console.log(this.http.get(`${this.baseUrl}deleteuser?id=${id}`));
    return this.http.get(`${this.baseUrl}deleteuser?id=${id}`)
    
    
  }
  

  constructor(private http:HttpClient) { }
}
