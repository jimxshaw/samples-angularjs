// This is the root component. Components are key parts of any angular 2
// application. They're essentially directives that have views attached to 
// them. Any angular 2 app will usually have several components working 
// together.
import {Component} from 'angular2/core';

@Component({
	// Have a selector of my-app means you can embed this component in 
	// your html code by using html tags. In this example, the tag would 
	// be <my-app></my-app> in index.html.
	// The template Hello World! is what will be loaded when the component 
	// gets embedded into the html files.
	// In order for this component to be "bootable," you have to have what's 
	// in boot.ts.  
    selector: 'my-app',
    template: 'Hello World!',
})
export class AppComponent {

}