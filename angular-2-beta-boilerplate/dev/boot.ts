// This file executes one method, the bootstrap method, which basically 
// loads up your app component, so that angular 2 knows that this app 
// component should be loaded upon the start of the application. When 
// the page is loaded, the component will be readily available and can 
// be displayed on the html page.  

import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent);
