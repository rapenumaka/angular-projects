import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import {plainToClass} from "class-transformer";

@Component({
  selector: 'app-http-comm',
  templateUrl: './http-comm.component.html',
  styleUrls: ['./http-comm.component.css']
})
export class HttpCommComponent implements OnInit{

  isReady='waiting';

   constructor(private http: HttpClient){

   }

   userList: Users[] = [];


  ngOnInit(): void {
    this.isReady = "initailzed";
    let response = this.http.get('http://localhost:8581/api/v1/users');
    response.subscribe((data) => {
      this.userList =   plainToClass(Users, data as Object[]);
      console.log(this.userList)
    })
  }

}
