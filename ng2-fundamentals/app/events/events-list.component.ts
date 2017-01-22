import { Component } from "@angular/core";

@Component({
    selector: "events-list",
    templateUrl: "app/events/events-list.component.html"
})
export class EventsListComponent {
    event = {
        id: 1,
        name: "Angular Connect",
        date: "12/21/2044",
        time: "9:00 am",
        price: 299.99,
        imageUrl: "/app/assets/images/angularconnect-shield.png",
        location: {
            address: "123 Main Street",
            city: "Dallas",
            country: "USA"
        }
    };
}