import { Component } from '@angular/core';
import { singer } from './singers';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {


isServerCreated: boolean = false;
autoStatus: string;

enteredInput(event: Event) {

  console.log("input teext event "+(<HTMLInputElement>event.target).value);
}


buttonDisable : boolean = false;
allowServer: boolean = true;
welcome: string = "not false";
serverName: string = "Name a server";
serverTest : string  =" Server not created";

 allSingers : singer[] = [
   {
    "artist" : "RICKY",
    "country" : "USA"
   },
   {
    "artist" : "drake",
    "country" : "Canada"
   },
   {
    "artist" : "spb",
    "country" : "India"
   }
]



constructor(){
  setTimeout(() => {
    this.allowServer=false;
    this.welcome="change to something";
  }, 4000);

  this.autoStatus = Math.random() > 0.5 ? 'online' : 'offline';
}
onServerChange() {
  console.log("Button primary clicked");
  this.isServerCreated= true;
 this.serverTest = "server is now being created ";
}

getBackgroundColor()  {
  return this.autoStatus === 'online' ? 'green' : 'red';
}


   serverStatus : string = 'offline';
   serverId : number = 101

}


