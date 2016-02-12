// By importing components from angular itself such as the Component component,
// this will enable you to give the class a specified file decorator of type 
// Component, thus marking this class as a Component if you will. 
import {Component} from "angular2/core";

// Exporting class means to make the class available outside of its file.
// @Component is an angular 2 decorator that forces angular to see the class 
// that's being decorated as a Component. Without the decorator, the class 
// would be no different from any regular exported class. The decorator 
// allows you to add meta data or configuration settings. Angular 2 
// components are directives that also have a view. 
@Component({
	selector: "shopping-list",
	// Angular structural directives use a * while angular events use (). Structural means 
	// the directives changes the document in some way.
	// Local variables are denoted by a #.
	// Model binding use [] and for two-way binding, use [()].
	template: `
		<ul>
			<li 
			*ngFor="#shoppingListItem of shoppingListItems"
			(click)="onItemClicked(shoppingListItem)"
			>
				{{shoppingListItem.name}}
			</li>
		</ul>
		<input type="text" [(ngModel)]="selectedItem.name">
	`
})
export class ShoppingListComponent {
	public shoppingListItems = [
		{name: "Eggs"},
		{name: "Milk"},
		{name: "Bread"}
	];
	public selectedItem = {name: ""};

	onItemClicked(shoppingListItem) {
		this.selectedItem = shoppingListItem;
	}
}














