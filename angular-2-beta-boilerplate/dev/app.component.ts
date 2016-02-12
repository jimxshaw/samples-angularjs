// This is the root component. Components are key parts of any angular 2
// application. They're essentially directives that have views attached to 
// them. Any angular 2 app will usually have several components working 
// together.
// Just as you have to tell your bootstrap component in boot.ts to load 
// the app component, you have to load the shopping list component in 
// order for the app component to use shopping list.
import {Component} from 'angular2/core';
import {ShoppingListComponent} from "./shopping-list.component";

@Component({
	// Have a selector of my-app means you can embed this component in 
	// your html code by using html tags. In this example, the tag would 
	// be <my-app></my-app> in index.html.
	// The template is what will be loaded when the component 
	// gets embedded into the html files.
	// In order for this component to be "bootable," you have to have what's 
	// in boot.ts.  
    selector: 'my-app',
    template: `
    	<shopping-list></shopping-list>
    `,
    // This specifies an array of directives (components are directives) that 
    // should be loaded in this particular component so that you can use them 
    // in the template of this component.  
    directives: [ShoppingListComponent]
})
export class AppComponent {

}