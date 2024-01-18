import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hotel-inventory';

  role = 'Admin';


  @ViewChild('myhotelName', {static : false}) myhotelName! : ElementRef;

  ngOnInit(): void {
    this.myhotelName.nativeElement.innerText = 'Tru Hotels Corp';
  }

}
