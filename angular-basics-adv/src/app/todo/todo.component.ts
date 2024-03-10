import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './todo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  startDate: string;
  todoForm! :  FormGroup;
  todoObject :Todo;
  todoList : Todo[] = [];

  completedToList : Todo[] = [];

  vstring ='';

  constructor() {

  }



  ngOnInit(): void {
    
    this.todoForm = new FormGroup({
      'topic': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'description': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'targetDate' : new FormControl(null, [Validators.required, Validators.minLength(5)])
    });

  }



  onSubmit(){

    console.log(this.todoForm.value.topic);
    this.todoObject  = {
      'topic': this.todoForm.value.topic,
      'description': this.todoForm.value.description,
      'dateAdded': this.todoForm.value.dateAdded,
      'targetDate': this.todoForm.value.dateAdded,
      'isCompleted': false
    };
      
    

 
    this.todoList.push(this.todoObject);

    console.log(this.todoList.length);
    this.todoForm.reset();
  }

  moveToCompleted(todo: Todo){
    todo.isCompleted=true;
    this.completedToList.push(todo);

  }


  
  OnClear(){
    this.todoForm.reset();
  }
}
