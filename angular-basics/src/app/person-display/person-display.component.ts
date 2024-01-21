import { Component, EventEmitter, Input, Output } from '@angular/core';
import { person } from '../person/person';

@Component({
  selector: 'app-person-display',
  templateUrl: './person-display.component.html',
  styleUrls: ['./person-display.component.css']
})
export class PersonDisplayComponent {

  @Input()  
  listOfPersons : person[] = [];

  @Output('specialPerson')
  selectPerson = new EventEmitter<person>();


  public selectedPerson(_t13: person) {
    console.log("Selected person "+_t13.getName());
    this.selectPerson.emit(_t13);
   }
}
