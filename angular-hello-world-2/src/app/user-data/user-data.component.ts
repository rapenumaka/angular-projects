import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  name: string; // <-- added name property
  foods : string[];
  constructor() {
  this.name = 'Arvind'; // set the name
  this.foods = ['apple','carrot','pear','pineapple','grapes'];
  }
    ngOnInit() {
    }
}
