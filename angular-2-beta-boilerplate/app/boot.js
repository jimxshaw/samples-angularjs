// This file executes one method, the bootstrap method, which basically 
// loads up your app component, so that angular 2 knows that this app 
// component should be loaded upon the start of the application. When 
// the page is loaded, the component will be readily available and can 
// be displayed on the html page.  
System.register(['angular2/platform/browser', "./app.component"], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBQ3hFLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEUsdUVBQXVFO0FBQ3ZFLG1DQUFtQzs7Ozs7Ozs7Ozs7O1lBS25DLHNDQUFzQztZQUN0QyxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGV4ZWN1dGVzIG9uZSBtZXRob2QsIHRoZSBib290c3RyYXAgbWV0aG9kLCB3aGljaCBiYXNpY2FsbHkgXG4vLyBsb2FkcyB1cCB5b3VyIGFwcCBjb21wb25lbnQsIHNvIHRoYXQgYW5ndWxhciAyIGtub3dzIHRoYXQgdGhpcyBhcHAgXG4vLyBjb21wb25lbnQgc2hvdWxkIGJlIGxvYWRlZCB1cG9uIHRoZSBzdGFydCBvZiB0aGUgYXBwbGljYXRpb24uIFdoZW4gXG4vLyB0aGUgcGFnZSBpcyBsb2FkZWQsIHRoZSBjb21wb25lbnQgd2lsbCBiZSByZWFkaWx5IGF2YWlsYWJsZSBhbmQgY2FuIFxuLy8gYmUgZGlzcGxheWVkIG9uIHRoZSBodG1sIHBhZ2UuICBcblxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbmJvb3RzdHJhcChBcHBDb21wb25lbnQpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
