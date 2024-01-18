import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { RoomProps } from '../rooms';
import {CommonModule, DatePipe, NgFor, NgForOf} from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgFor,DatePipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})

export class RoomsListComponent implements OnInit {


selectRoom(roompros: RoomProps) {
  console.log('The button is pressend')
  this.selectedRoom.emit(roompros);


}
  
  @Output() selectedRoom = new EventEmitter<RoomProps>;
  
  @Input()
  roomslist: RoomProps[] = [];

  @Input()
  specials : string = ''

  ngOnInit(): void {
 
  }

}
