System.register(['angular2/core', "./shopping-list.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_component_1_1) {
                shopping_list_component_1 = shopping_list_component_1_1;
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
                        // The template is what will be loaded when the component 
                        // gets embedded into the html files.
                        // In order for this component to be "bootable," you have to have what's 
                        // in boot.ts.  
                        selector: 'my-app',
                        template: "\n    \t<shopping-list></shopping-list>\n    ",
                        // This specifies an array of directives (components are directives) that 
                        // should be loaded in this particular component so that you can use them 
                        // in the template of this component.  
                        directives: [shopping_list_component_1.ShoppingListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQUE7Z0JBbUJBQyxDQUFDQTtnQkFuQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLG1FQUFtRUE7d0JBQ25FQSxxRUFBcUVBO3dCQUNyRUEsc0NBQXNDQTt3QkFDdENBLDBEQUEwREE7d0JBQzFEQSxxQ0FBcUNBO3dCQUNyQ0EseUVBQXlFQTt3QkFDekVBLGdCQUFnQkE7d0JBQ2JBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsK0NBRVRBO3dCQUNEQSwwRUFBMEVBO3dCQUMxRUEsMEVBQTBFQTt3QkFDMUVBLHVDQUF1Q0E7d0JBQ3ZDQSxVQUFVQSxFQUFFQSxDQUFDQSwrQ0FBcUJBLENBQUNBO3FCQUN0Q0EsQ0FBQ0E7O2lDQUdEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBbkJBLEFBbUJDQSxJQUFBO1lBbkJELHVDQW1CQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHRoZSByb290IGNvbXBvbmVudC4gQ29tcG9uZW50cyBhcmUga2V5IHBhcnRzIG9mIGFueSBhbmd1bGFyIDJcbi8vIGFwcGxpY2F0aW9uLiBUaGV5J3JlIGVzc2VudGlhbGx5IGRpcmVjdGl2ZXMgdGhhdCBoYXZlIHZpZXdzIGF0dGFjaGVkIHRvIFxuLy8gdGhlbS4gQW55IGFuZ3VsYXIgMiBhcHAgd2lsbCB1c3VhbGx5IGhhdmUgc2V2ZXJhbCBjb21wb25lbnRzIHdvcmtpbmcgXG4vLyB0b2dldGhlci5cbi8vIEp1c3QgYXMgeW91IGhhdmUgdG8gdGVsbCB5b3VyIGJvb3RzdHJhcCBjb21wb25lbnQgaW4gYm9vdC50cyB0byBsb2FkIFxuLy8gdGhlIGFwcCBjb21wb25lbnQsIHlvdSBoYXZlIHRvIGxvYWQgdGhlIHNob3BwaW5nIGxpc3QgY29tcG9uZW50IGluIFxuLy8gb3JkZXIgZm9yIHRoZSBhcHAgY29tcG9uZW50IHRvIHVzZSBzaG9wcGluZyBsaXN0LlxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RDb21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuXHQvLyBIYXZlIGEgc2VsZWN0b3Igb2YgbXktYXBwIG1lYW5zIHlvdSBjYW4gZW1iZWQgdGhpcyBjb21wb25lbnQgaW4gXG5cdC8vIHlvdXIgaHRtbCBjb2RlIGJ5IHVzaW5nIGh0bWwgdGFncy4gSW4gdGhpcyBleGFtcGxlLCB0aGUgdGFnIHdvdWxkIFxuXHQvLyBiZSA8bXktYXBwPjwvbXktYXBwPiBpbiBpbmRleC5odG1sLlxuXHQvLyBUaGUgdGVtcGxhdGUgaXMgd2hhdCB3aWxsIGJlIGxvYWRlZCB3aGVuIHRoZSBjb21wb25lbnQgXG5cdC8vIGdldHMgZW1iZWRkZWQgaW50byB0aGUgaHRtbCBmaWxlcy5cblx0Ly8gSW4gb3JkZXIgZm9yIHRoaXMgY29tcG9uZW50IHRvIGJlIFwiYm9vdGFibGUsXCIgeW91IGhhdmUgdG8gaGF2ZSB3aGF0J3MgXG5cdC8vIGluIGJvb3QudHMuICBcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxzaG9wcGluZy1saXN0Pjwvc2hvcHBpbmctbGlzdD5cbiAgICBgLFxuICAgIC8vIFRoaXMgc3BlY2lmaWVzIGFuIGFycmF5IG9mIGRpcmVjdGl2ZXMgKGNvbXBvbmVudHMgYXJlIGRpcmVjdGl2ZXMpIHRoYXQgXG4gICAgLy8gc2hvdWxkIGJlIGxvYWRlZCBpbiB0aGlzIHBhcnRpY3VsYXIgY29tcG9uZW50IHNvIHRoYXQgeW91IGNhbiB1c2UgdGhlbSBcbiAgICAvLyBpbiB0aGUgdGVtcGxhdGUgb2YgdGhpcyBjb21wb25lbnQuICBcbiAgICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
