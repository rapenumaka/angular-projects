import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './userservice';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id1: number=1;

  constructor(private route: ActivatedRoute, private userService : UserService){
    
  }

  onActivate(){
    console.log('Button is pressed');
    // his.userService.activatedEmitted.emit(true);

    this.userService.activatedEmitted.next(true);
  }
  ngOnInit(): void {
    this.route.params.subscribe(

      (params: Params) => {
        this.id1= params['id'];

      }
    );
  }


}
