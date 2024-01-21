import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { person } from './person';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, AfterViewInit {


logInformation(inputSalary: HTMLInputElement, inputOccupation: HTMLInputElement) {
console.log("Occupation : "+inputOccupation.value);
console.log("Salary : "+inputSalary.value);
}

personList: person[] = [];


enteredEmail: any;
enteredName: any;
enteredAge: any;

@ViewChild(HeaderComponent) headerComponent! : HeaderComponent;
@ViewChildren(HeaderComponent) headerComponentList! : QueryList<HeaderComponent>;

constructor(){
  console.log('Method is constructor');
}
  ngAfterViewInit(): void {
   console.log(this.headerComponent);
   this.headerComponent.title="Person View";
   console.log("Length is "+this.headerComponentList.length);
   this.headerComponentList.first.title ="Person View First";
   this.headerComponentList.last.title = "Person View Last";
  }
ngOnInit(): void {
  console.log('Method is ngOnInit');
}


  
saveinformation() {
 console.log('Button is pressed');

 console.log("Name :"+this.enteredName+ " Age : "+this.enteredAge+ " Email :"+this.enteredEmail);
const p1 = new person(this.enteredName,this.enteredAge, this.enteredEmail);
 this.personList.push(p1);
}


selectedPersonFromChild(sperson: person) {
  console.log("Selected child person "+sperson.getName());
  }



}
