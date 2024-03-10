import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import {plainToClass} from "class-transformer";
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-http-comm',
  templateUrl: './http-comm.component.html',
  styleUrls: ['./http-comm.component.css']
})
export class HttpCommComponent implements OnInit{

  isReady='waiting';
  userId: number = 1;


   constructor(private http: HttpClient, private userService:UserserviceService ){

   }

   userList: Users[] = [];


  ngOnInit(): void {
    this.isReady = "initailzed";
   
    this.userService.getAllUsers().subscribe(body => {
      this.userList =   plainToClass(Users, body as Object[]);
    });

  }

  enteredInput(event: Event) {

    console.log("input teext event "+(<HTMLInputElement>event.target).value);
    let enteredNumberstring = (<HTMLInputElement>event.target).value;
    this.userId = parseInt(enteredNumberstring);
    console.log("UserID :"+this.userId);

    this.userService.getUserById(this.userId).subscribe(body =>{
       console.log(body);
    });
  }

}
