import { Component } from "@angular/core";

@Component({
    selector: "events-list",
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <event-thumbnail [event]="event1"></event-thumbnail>            
        </div>
    `
})
export class EventsListComponent {
    event1 = {
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