import {Component} from '@angular/core';
import {Employee} from "../models/Employee.model";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = [
    "English",
    "Spanish",
    "Other"
  ];

  model = new Employee("George", "Washington");

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toLocaleUpperCase() + value.slice(1);
    }
    else {
      this.model.firstName = value;
    }
  }

  
}
