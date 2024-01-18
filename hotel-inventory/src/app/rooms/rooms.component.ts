import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {  Rooms, RoomProps } from './rooms';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    this.headerComponent.headerTitle= "Title from header component"
  }


  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;



fetchSelectedRoom(room: RoomProps) {
 console.log(room)
}
hiddenValue: boolean = true

  ngOnInit(): void {

    console.log(this.headerComponent);

    console.log('Invoked init method');
    this.allRoomsProps =[{
      title: 'Deluxe Queen Room', 
      amenities : 'forced shower, microwave, fridge, complimentary beer', 
      checkInDate : new Date('11-Jan-2024'),
      checkoutDate : new Date('15-Jan-2024'), 
      image : 'https://pixabay.com/photos/bedroom-interior-design-bed-room-5664221/' ,
      roomNumber : 102,
      price : 1522
    },
  
    {
      title: 'Luxury Queen Room', 
      amenities : 'forced shower, microwave, fridge, complimentary champagne', 
      checkInDate : new Date('11-Jan-2024'),
      checkoutDate : new Date('15-Jan-2024'), 
      image : 'https://pixabay.com/photos/bedroom-interior-design-bed-room-5664221/' ,
      roomNumber : 302,
      price : 1600
    },
  
    {
      title: 'Deluxe King Room', 
      amenities : 'forced shower, microwave, fridge, tap water', 
      checkInDate : new Date('11-Jan-2024'),
      checkoutDate : new Date('15-Jan-2024'), 
      image : 'https://pixabay.com/photos/bedroom-interior-design-bed-room-5664221/' ,
      roomNumber : 105,
      price : 1522
    },
  
    {
      title: 'Luxury Queen Room', 
      amenities : 'forced shower, microwave, fridge, complimentary condoms', 
      checkInDate : new Date('11-Jan-2024'),
      checkoutDate : new Date('15-Jan-2024'), 
      image : 'https://pixabay.com/photos/bedroom-interior-design-bed-room-5664221/' ,
      roomNumber : 202,
      price : 1540
    },
  
    {
      title: 'Deluxe Queen Room', 
      amenities : 'forced shower, microwave, fridge, flushable wipes', 
      checkInDate : new Date('11-Jan-2024'),
      checkoutDate : new Date('15-Jan-2024'), 
      image : 'https://pixabay.com/photos/bedroom-interior-design-bed-room-5664221/' ,
      roomNumber : 305,
      price : 1500
    },
  
    {
      title: 'Deluxe Double Room', 
      amenities : 'forced shower, microwave, fridge, complimentary beer', 
      checkInDate : new Date('11-Jan-2024'),
      checkoutDate : new Date('15-Jan-2024'), 
      image : 'https://pixabay.com/photos/bedroom-interior-design-bed-room-5664221/' ,
      roomNumber : 306,
      price : 1022
    },
  
    {
      title: 'Single Room', 
      amenities : 'Uncleaned bathrooms', 
      checkInDate : new Date('11-Jan-2024'),
      checkoutDate : new Date('15-Jan-2024'), 
      image : 'https://pixabay.com/photos/bedroom-interior-design-bed-room-5664221/' ,
      roomNumber : 104,
      price : 950
    }
  
  ];
  }
  isValid= true;
  hotelName : string = 'Tru Hotel';
  numberOfRooms : string = '35';
  something : string = 'something something is not really something';
  roomstoDisplay : Rooms = {
    availableRooms: 10,
    bookedRooms : 6,
    totalRooms : 25
  }
  allRoomsProps: RoomProps[] = [];



  specialBreakfast : string = "Buffet Breakfast"
  
 isAvailable : boolean = this.roomstoDisplay.availableRooms > 0;

   somefunction() {
    this.hiddenValue= !this.hiddenValue;
    console.log('button is pressed');
    console.log(this.isAvailable);
  }

}
