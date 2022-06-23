import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) {

  }
  getUserData():Observable<any>{
   let url= "https://reqres.in/api/users?page=2"
   return this.http.get(url);
 }
}
