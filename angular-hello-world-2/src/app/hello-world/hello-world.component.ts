import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

   constructor(){
    console.log("Constructor on HELLOW WORLD COMPONEWNTG");
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    console.log("Constructor on HELLOW WORLD COMPONEWNTG");

  }

}
