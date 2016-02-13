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
	// Local variables are denoted by a #. Note that #shoppingListItem is used twice but 
	// that's allowed because the local variables are in different contexts.
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
		<button (click)="onDeleteItem()">Delete Item</button><br>
		<input type="text" #shoppingListItem>
		<button (click)="onAddItem(shoppingListItem)">Add Item</button>
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
		shoppingListItem.value = "";
	}

	// You cannot simply .push(shoppingListItem) because shoppingListItem is bound 
	// to the input tag and not the value of the user input. Since, every item in 
	// the shoppingListItems array is an object, you have to push the entire input object 
	// and specify its value. 
	onAddItem(shoppingListItem) {
		this.shoppingListItems.push({ name: shoppingListItem.value });
		shoppingListItem.value = "";
	}

	onDeleteItem() {
		var item = this.shoppingListItems.indexOf(this.selectedItem);
		this.shoppingListItems.splice(item, 1);
	}
}














