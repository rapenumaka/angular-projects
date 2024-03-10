import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { UserService } from '../user/userservice';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy{

// building observables

// We store all our ssubscribes in Subscription
userActivated = false;

constructor(private userService: UserService){

}

private firstObersSubscription! : Subscription

ngOnInit(){
  console.log(this.userActivated);
  this.userService.activatedEmitted.subscribe( isthatButtonClicked => {
    this.userActivated= isthatButtonClicked;
  })


  /** 
    this.firstObersSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })
    */
const customIntervalObservable = new Observable((observer) =>{
  let count = 0;

  setInterval(() =>{
    observer.next(count)
    count++;
    if(count === 4){
      observer.error(new Error("Count is 4 error signal"));
    }

    if(count > 10){
      observer.complete();
    }
  }, 1000);

});



  
}

// To prevent memory leaks we will unsubscribe to the observables
ngOnDestroy(): void {
  this.firstObersSubscription.unsubscribe();
}
}
