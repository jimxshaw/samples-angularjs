System.register(["angular2/core"], function(exports_1) {
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
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Exporting class means to make the class available outside of its file.
            // @Component is an angular 2 decorator that forces angular to see the class 
            // that's being decorated as a Component. Without the decorator, the class 
            // would be no different from any regular exported class. The decorator 
            // allows you to add meta data or configuration settings. Angular 2 
            // components are directives that also have a view. 
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.shoppingListItems = [
                        { name: "Eggs" },
                        { name: "Milk" },
                        { name: "Bread" }
                    ];
                    this.selectedItem = { name: "" };
                }
                ShoppingListComponent.prototype.onItemClicked = function (shoppingListItem) {
                    this.selectedItem = shoppingListItem;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: "shopping-list",
                        // Angular structural directives use a * while angular events use (). Structural means 
                        // the directives changes the document in some way.
                        // Local variables are denoted by a #.
                        // Model binding use [] and for two-way binding, use [()].
                        template: "\n\t\t<ul>\n\t\t\t<li \n\t\t\t*ngFor=\"#shoppingListItem of shoppingListItems\"\n\t\t\t(click)=\"onItemClicked(shoppingListItem)\"\n\t\t\t>\n\t\t\t\t{{shoppingListItem.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<input type=\"text\" [(ngModel)]=\"selectedItem.name\">\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            })();
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlNob3BwaW5nTGlzdENvbXBvbmVudCIsIlNob3BwaW5nTGlzdENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlNob3BwaW5nTGlzdENvbXBvbmVudC5vbkl0ZW1DbGlja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQSx5RUFBeUU7WUFDekUsNkVBQTZFO1lBQzdFLDJFQUEyRTtZQUMzRSx3RUFBd0U7WUFDeEUsb0VBQW9FO1lBQ3BFLG9EQUFvRDtZQUNwRDtnQkFBQUE7b0JBbUJRQyxzQkFBaUJBLEdBQUdBO3dCQUMxQkEsRUFBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBQ0E7d0JBQ2RBLEVBQUNBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUNBO3dCQUNkQSxFQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFDQTtxQkFDZkEsQ0FBQ0E7b0JBQ0tBLGlCQUFZQSxHQUFHQSxFQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxDQUFDQTtnQkFLbENBLENBQUNBO2dCQUhBRCw2Q0FBYUEsR0FBYkEsVUFBY0EsZ0JBQWdCQTtvQkFDN0JFLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLGdCQUFnQkEsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQTtnQkE1QkZGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsdUZBQXVGQTt3QkFDdkZBLG1EQUFtREE7d0JBQ25EQSxzQ0FBc0NBO3dCQUN0Q0EsMERBQTBEQTt3QkFDMURBLFFBQVFBLEVBQUVBLHlRQVVUQTtxQkFDREEsQ0FBQ0E7OzBDQVlEQTtnQkFBREEsNEJBQUNBO1lBQURBLENBN0JBLEFBNkJDQSxJQUFBO1lBN0JELHlEQTZCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQnkgaW1wb3J0aW5nIGNvbXBvbmVudHMgZnJvbSBhbmd1bGFyIGl0c2VsZiBzdWNoIGFzIHRoZSBDb21wb25lbnQgY29tcG9uZW50LFxuLy8gdGhpcyB3aWxsIGVuYWJsZSB5b3UgdG8gZ2l2ZSB0aGUgY2xhc3MgYSBzcGVjaWZpZWQgZmlsZSBkZWNvcmF0b3Igb2YgdHlwZSBcbi8vIENvbXBvbmVudCwgdGh1cyBtYXJraW5nIHRoaXMgY2xhc3MgYXMgYSBDb21wb25lbnQgaWYgeW91IHdpbGwuIFxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8vIEV4cG9ydGluZyBjbGFzcyBtZWFucyB0byBtYWtlIHRoZSBjbGFzcyBhdmFpbGFibGUgb3V0c2lkZSBvZiBpdHMgZmlsZS5cbi8vIEBDb21wb25lbnQgaXMgYW4gYW5ndWxhciAyIGRlY29yYXRvciB0aGF0IGZvcmNlcyBhbmd1bGFyIHRvIHNlZSB0aGUgY2xhc3MgXG4vLyB0aGF0J3MgYmVpbmcgZGVjb3JhdGVkIGFzIGEgQ29tcG9uZW50LiBXaXRob3V0IHRoZSBkZWNvcmF0b3IsIHRoZSBjbGFzcyBcbi8vIHdvdWxkIGJlIG5vIGRpZmZlcmVudCBmcm9tIGFueSByZWd1bGFyIGV4cG9ydGVkIGNsYXNzLiBUaGUgZGVjb3JhdG9yIFxuLy8gYWxsb3dzIHlvdSB0byBhZGQgbWV0YSBkYXRhIG9yIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MuIEFuZ3VsYXIgMiBcbi8vIGNvbXBvbmVudHMgYXJlIGRpcmVjdGl2ZXMgdGhhdCBhbHNvIGhhdmUgYSB2aWV3LiBcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJzaG9wcGluZy1saXN0XCIsXG5cdC8vIEFuZ3VsYXIgc3RydWN0dXJhbCBkaXJlY3RpdmVzIHVzZSBhICogd2hpbGUgYW5ndWxhciBldmVudHMgdXNlICgpLiBTdHJ1Y3R1cmFsIG1lYW5zIFxuXHQvLyB0aGUgZGlyZWN0aXZlcyBjaGFuZ2VzIHRoZSBkb2N1bWVudCBpbiBzb21lIHdheS5cblx0Ly8gTG9jYWwgdmFyaWFibGVzIGFyZSBkZW5vdGVkIGJ5IGEgIy5cblx0Ly8gTW9kZWwgYmluZGluZyB1c2UgW10gYW5kIGZvciB0d28td2F5IGJpbmRpbmcsIHVzZSBbKCldLlxuXHR0ZW1wbGF0ZTogYFxuXHRcdDx1bD5cblx0XHRcdDxsaSBcblx0XHRcdCpuZ0Zvcj1cIiNzaG9wcGluZ0xpc3RJdGVtIG9mIHNob3BwaW5nTGlzdEl0ZW1zXCJcblx0XHRcdChjbGljayk9XCJvbkl0ZW1DbGlja2VkKHNob3BwaW5nTGlzdEl0ZW0pXCJcblx0XHRcdD5cblx0XHRcdFx0e3tzaG9wcGluZ0xpc3RJdGVtLm5hbWV9fVxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRJdGVtLm5hbWVcIj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQge1xuXHRwdWJsaWMgc2hvcHBpbmdMaXN0SXRlbXMgPSBbXG5cdFx0e25hbWU6IFwiRWdnc1wifSxcblx0XHR7bmFtZTogXCJNaWxrXCJ9LFxuXHRcdHtuYW1lOiBcIkJyZWFkXCJ9XG5cdF07XG5cdHB1YmxpYyBzZWxlY3RlZEl0ZW0gPSB7bmFtZTogXCJcIn07XG5cblx0b25JdGVtQ2xpY2tlZChzaG9wcGluZ0xpc3RJdGVtKSB7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBzaG9wcGluZ0xpc3RJdGVtO1xuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
