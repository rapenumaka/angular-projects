import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders=['male','female'];
  signupForm! :  FormGroup;
  forbiddenUserNames = ['john', 'mary'];

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        'username': new FormControl(null,[Validators.required,Validators.minLength(5), this.forbiddenNames]),
        'email' : new FormControl(null,[Validators.email,Validators.required]),
        'gender' : new FormControl('male')

      }
    )
  }
  forbiddenNames = (control: FormControl): {[s: string]: boolean} => {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
   // Creating the Ansynchronous custom validator 
   // SOmetimes to the input has to be checked against backend server, if its the valid or not
   // Here Email is checked, if the email is test@test.com then its not valid , else others are valid
   // Sometimes we notice the Email is already existing the system,
/* 
   forbiddenEmailCheck(control : FormControl) : AsyncValidatorFn {
    const promise = new Promise<any>((resolve, reject) =>{
      //Simulating the time taken to be 1.5secs for backend call

      setTimeout(() => {
        if(control.value=='test@test.com'){
          resolve({'emailIsForbidden': true})
        }else{
          resolve(null)
        }
      },1500)
    });
    return promise;
   } */






  onSubmit(){
    console.log(this.signupForm);
  }






 

}
