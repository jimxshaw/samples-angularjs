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
}
