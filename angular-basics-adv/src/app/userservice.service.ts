import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl = 'http://localhost:8581/api/v1'

  constructor(private http: HttpClient) {

   }

   //Get all Users

   getAllUsers(): Observable<any> {
    return this.http.get('${this.baseUrl}/users');
   }

   //Create a User
   createUser(postData: {id: number, firstName: string, lastName : string, email: string}){
    this.http.post('${this.baseUrl}/create',postData)
   }

   //Delete a User
   deleteUserById(id:number): Observable<any>{
    return this.http.delete('${this.baseUrl}/delete/'+id)
   }

   //Update a User

   //Fetch a User by ID 
   getUserById(id:number){
    return this.http.get('http://localhost:8581/api/v1/user/'+id);
   }



}
