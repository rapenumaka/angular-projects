import { Routes } from "@angular/router";
import { PersonComponent } from "./person/person.component";

const routeConfig: Routes = [
    {
      path: '',
      component: PersonComponent,
      title: 'Home page'
    },
  ];
  
  export default routeConfig;