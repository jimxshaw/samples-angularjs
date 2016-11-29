import { Component } from '@angular/core';
import { Employee } from "../models/Employee.model";
import { FormPoster } from "../services/form-poster.service";
import { NgForm } from "@angular/forms";

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

  // model = new Employee("George", "Washington", true, "W2", "English", new Date("October 31, 2016").toLocaleDateString());

  model = new Employee("", "", false, "", "default", "");

  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPoster) {

  }

  submitForm(form: NgForm) {
    // Validate form.
    this.validatePrimaryLanguage(this.model.primaryLanguage);

    if (this.hasPrimaryLanguageError) {
      return;
    }

    this.formPoster.postEmployeeForm(this.model);
  }

  validatePrimaryLanguage(value) {
    if (value === "default") {
      this.hasPrimaryLanguageError = true;
    }
    else {
      this.hasPrimaryLanguageError = false;
    }
  }

  firstNameToUpperCase(value: string, isFirstName: boolean) {

    if (value.length > 0) {
      if (isFirstName) {
        this.model.firstName = value.charAt(0).toLocaleUpperCase() + value.slice(1);
      }
      else {
        this.model.lastName = value.charAt(0).toLocaleUpperCase() + value.slice(1);
      }
    }
    else {
      if (isFirstName) {
        this.model.firstName = value;
      }
      else {
        this.model.lastName = value;
      }
    }
  }


}
