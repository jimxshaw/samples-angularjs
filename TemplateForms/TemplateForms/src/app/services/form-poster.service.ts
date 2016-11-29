import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Employee } from "../models/Employee.model";


@Injectable()
export class FormPoster {

  constructor(private http: Http) {

  }

  postEmployeeForm(employee: Employee) {
    console.log("posting employee: ", employee);
  }


}
