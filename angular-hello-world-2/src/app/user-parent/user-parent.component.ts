import { Component } from '@angular/core';

@Component({
  selector: 'app-user-parent',
  templateUrl: './user-parent.component.html',
  styleUrls: ['./user-parent.component.css']
})
export class UserParentComponent {

   enterName = "Keerthu";
   somedata : string;

  TransferData(){
    this.somedata=this.enterName;
  }

}
