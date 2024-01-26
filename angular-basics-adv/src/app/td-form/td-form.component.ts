import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent {
  @ViewChild('f') signupForm! :NgForm ;
  answer:string='';
  
  clickMessage = '';


  genders = ['male','female'];
  suggestedUsername = "anyUser2023";

  suggestions = ['answer1','answer2','answer3'];
 
  autoFillForm(){
    console.log("Attempting to auto fill");

    this.signupForm.setValue({
      usernameEmailGroup : {
        username: this.suggestedUsername,
        email: 'anyemail@email.com'
      },
      secret:'pet',
      questionArea: 'Write the name of your favourite pet',
      gender:'male'

      
    })
  }
  /**
    onSubmit(form: NgForm){
    console.log('form: ', form)
  }
   */
   
  onSubmit(){
    console.log(this.signupForm);
  }

  suggestUsername(){
    console.log("Attempting to set usename");
    this.signupForm.form.patchValue({
      usernameEmailGroup : {
        username: this.suggestedUsername 
      }
    });
   

  }
  
  someFunction(event: MouseEvent){

    this.signupForm.form.patchValue({
      usernameEmailGroup : {
        username: (event.target as HTMLElement).textContent
      }
    });
  }


}
