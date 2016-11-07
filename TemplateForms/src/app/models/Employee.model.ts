export class Employee {

  firstName: string;
  lastName: string;
  isFullTime: boolean;
  paymentType: string;
  primaryLanguage: string;
  dateHired: string;

  constructor(firstName: string, lastName: string, isFullTime: boolean, paymentType: string, primaryLanguage: string, dateHired: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isFullTime = isFullTime;
    this.paymentType = paymentType;
    this.primaryLanguage = primaryLanguage;
    this.dateHired = dateHired;
  }
}
