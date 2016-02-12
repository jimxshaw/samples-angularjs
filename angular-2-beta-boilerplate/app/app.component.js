System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        // Have a selector of my-app means you can embed this component in 
                        // your html code by using html tags. In this example, the tag would 
                        // be <my-app></my-app> in index.html.
                        // The template Hello World! is what will be loaded when the component 
                        // gets embedded into the html files.
                        // In order for this component to be "bootable," you have to have what's 
                        // in boot.ts.  
                        selector: 'my-app',
                        template: 'Hello World!',
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7Z0JBYUFDLENBQUNBO2dCQWJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxtRUFBbUVBO3dCQUNuRUEscUVBQXFFQTt3QkFDckVBLHNDQUFzQ0E7d0JBQ3RDQSx1RUFBdUVBO3dCQUN2RUEscUNBQXFDQTt3QkFDckNBLHlFQUF5RUE7d0JBQ3pFQSxnQkFBZ0JBO3dCQUNiQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLGNBQWNBO3FCQUMzQkEsQ0FBQ0E7O2lDQUdEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELHVDQWFDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgdGhlIHJvb3QgY29tcG9uZW50LiBDb21wb25lbnRzIGFyZSBrZXkgcGFydHMgb2YgYW55IGFuZ3VsYXIgMlxuLy8gYXBwbGljYXRpb24uIFRoZXkncmUgZXNzZW50aWFsbHkgZGlyZWN0aXZlcyB0aGF0IGhhdmUgdmlld3MgYXR0YWNoZWQgdG8gXG4vLyB0aGVtLiBBbnkgYW5ndWxhciAyIGFwcCB3aWxsIHVzdWFsbHkgaGF2ZSBzZXZlcmFsIGNvbXBvbmVudHMgd29ya2luZyBcbi8vIHRvZ2V0aGVyLlxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0Ly8gSGF2ZSBhIHNlbGVjdG9yIG9mIG15LWFwcCBtZWFucyB5b3UgY2FuIGVtYmVkIHRoaXMgY29tcG9uZW50IGluIFxuXHQvLyB5b3VyIGh0bWwgY29kZSBieSB1c2luZyBodG1sIHRhZ3MuIEluIHRoaXMgZXhhbXBsZSwgdGhlIHRhZyB3b3VsZCBcblx0Ly8gYmUgPG15LWFwcD48L215LWFwcD4gaW4gaW5kZXguaHRtbC5cblx0Ly8gVGhlIHRlbXBsYXRlIEhlbGxvIFdvcmxkISBpcyB3aGF0IHdpbGwgYmUgbG9hZGVkIHdoZW4gdGhlIGNvbXBvbmVudCBcblx0Ly8gZ2V0cyBlbWJlZGRlZCBpbnRvIHRoZSBodG1sIGZpbGVzLlxuXHQvLyBJbiBvcmRlciBmb3IgdGhpcyBjb21wb25lbnQgdG8gYmUgXCJib290YWJsZSxcIiB5b3UgaGF2ZSB0byBoYXZlIHdoYXQncyBcblx0Ly8gaW4gYm9vdC50cy4gIFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogJ0hlbGxvIFdvcmxkIScsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
