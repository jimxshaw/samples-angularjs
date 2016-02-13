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
                    shoppingListItem.value = "";
                };
                // You cannot simply .push(shoppingListItem) because shoppingListItem is bound 
                // to the input tag and not the value of the user input. Since, every item in 
                // the shoppingListItems array is an object, you have to push the entire input object 
                // and specify its value. 
                ShoppingListComponent.prototype.onAddItem = function (shoppingListItem) {
                    this.shoppingListItems.push({ name: shoppingListItem.value });
                    shoppingListItem.value = "";
                };
                ShoppingListComponent.prototype.onDeleteItem = function () {
                    var item = this.shoppingListItems.indexOf(this.selectedItem);
                    this.shoppingListItems.splice(item, 1);
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: "shopping-list",
                        // Angular structural directives use a * while angular events use (). Structural means 
                        // the directives changes the document in some way.
                        // Local variables are denoted by a #. Note that #shoppingListItem is used twice but 
                        // that's allowed because the local variables are in different contexts.
                        // Model binding use [] and for two-way binding, use [()].
                        template: "\n\t\t<ul>\n\t\t\t<li \n\t\t\t*ngFor=\"#shoppingListItem of shoppingListItems\"\n\t\t\t(click)=\"onItemClicked(shoppingListItem)\"\n\t\t\t>\n\t\t\t\t{{shoppingListItem.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<input type=\"text\" [(ngModel)]=\"selectedItem.name\">\n\t\t<button (click)=\"onDeleteItem()\">Delete Item</button><br>\n\t\t<input type=\"text\" #shoppingListItem>\n\t\t<button (click)=\"onAddItem(shoppingListItem)\">Add Item</button>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            })();
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlNob3BwaW5nTGlzdENvbXBvbmVudCIsIlNob3BwaW5nTGlzdENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlNob3BwaW5nTGlzdENvbXBvbmVudC5vbkl0ZW1DbGlja2VkIiwiU2hvcHBpbmdMaXN0Q29tcG9uZW50Lm9uQWRkSXRlbSIsIlNob3BwaW5nTGlzdENvbXBvbmVudC5vbkRlbGV0ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBLHlFQUF5RTtZQUN6RSw2RUFBNkU7WUFDN0UsMkVBQTJFO1lBQzNFLHdFQUF3RTtZQUN4RSxvRUFBb0U7WUFDcEUsb0RBQW9EO1lBQ3BEO2dCQUFBQTtvQkF1QlFDLHNCQUFpQkEsR0FBR0E7d0JBQzFCQSxFQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFDQTt3QkFDZEEsRUFBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBQ0E7d0JBQ2RBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUNBO3FCQUNmQSxDQUFDQTtvQkFDS0EsaUJBQVlBLEdBQUdBLEVBQUNBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUNBLENBQUNBO2dCQW9CbENBLENBQUNBO2dCQWxCQUQsNkNBQWFBLEdBQWJBLFVBQWNBLGdCQUFnQkE7b0JBQzdCRSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxnQkFBZ0JBLENBQUNBO29CQUNyQ0EsZ0JBQWdCQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQUVERiwrRUFBK0VBO2dCQUMvRUEsOEVBQThFQTtnQkFDOUVBLHNGQUFzRkE7Z0JBQ3RGQSwwQkFBMEJBO2dCQUMxQkEseUNBQVNBLEdBQVRBLFVBQVVBLGdCQUFnQkE7b0JBQ3pCRyxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQzlEQSxnQkFBZ0JBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBRURILDRDQUFZQSxHQUFaQTtvQkFDQ0ksSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtvQkFDN0RBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxDQUFDQTtnQkEvQ0ZKO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsdUZBQXVGQTt3QkFDdkZBLG1EQUFtREE7d0JBQ25EQSxxRkFBcUZBO3dCQUNyRkEsd0VBQXdFQTt3QkFDeEVBLDBEQUEwREE7d0JBQzFEQSxRQUFRQSxFQUFFQSw4YkFhVEE7cUJBQ0RBLENBQUNBOzswQ0EyQkRBO2dCQUFEQSw0QkFBQ0E7WUFBREEsQ0FoREEsQUFnRENBLElBQUE7WUFoREQseURBZ0RDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCeSBpbXBvcnRpbmcgY29tcG9uZW50cyBmcm9tIGFuZ3VsYXIgaXRzZWxmIHN1Y2ggYXMgdGhlIENvbXBvbmVudCBjb21wb25lbnQsXG4vLyB0aGlzIHdpbGwgZW5hYmxlIHlvdSB0byBnaXZlIHRoZSBjbGFzcyBhIHNwZWNpZmllZCBmaWxlIGRlY29yYXRvciBvZiB0eXBlIFxuLy8gQ29tcG9uZW50LCB0aHVzIG1hcmtpbmcgdGhpcyBjbGFzcyBhcyBhIENvbXBvbmVudCBpZiB5b3Ugd2lsbC4gXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLy8gRXhwb3J0aW5nIGNsYXNzIG1lYW5zIHRvIG1ha2UgdGhlIGNsYXNzIGF2YWlsYWJsZSBvdXRzaWRlIG9mIGl0cyBmaWxlLlxuLy8gQENvbXBvbmVudCBpcyBhbiBhbmd1bGFyIDIgZGVjb3JhdG9yIHRoYXQgZm9yY2VzIGFuZ3VsYXIgdG8gc2VlIHRoZSBjbGFzcyBcbi8vIHRoYXQncyBiZWluZyBkZWNvcmF0ZWQgYXMgYSBDb21wb25lbnQuIFdpdGhvdXQgdGhlIGRlY29yYXRvciwgdGhlIGNsYXNzIFxuLy8gd291bGQgYmUgbm8gZGlmZmVyZW50IGZyb20gYW55IHJlZ3VsYXIgZXhwb3J0ZWQgY2xhc3MuIFRoZSBkZWNvcmF0b3IgXG4vLyBhbGxvd3MgeW91IHRvIGFkZCBtZXRhIGRhdGEgb3IgY29uZmlndXJhdGlvbiBzZXR0aW5ncy4gQW5ndWxhciAyIFxuLy8gY29tcG9uZW50cyBhcmUgZGlyZWN0aXZlcyB0aGF0IGFsc28gaGF2ZSBhIHZpZXcuIFxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcInNob3BwaW5nLWxpc3RcIixcblx0Ly8gQW5ndWxhciBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXMgdXNlIGEgKiB3aGlsZSBhbmd1bGFyIGV2ZW50cyB1c2UgKCkuIFN0cnVjdHVyYWwgbWVhbnMgXG5cdC8vIHRoZSBkaXJlY3RpdmVzIGNoYW5nZXMgdGhlIGRvY3VtZW50IGluIHNvbWUgd2F5LlxuXHQvLyBMb2NhbCB2YXJpYWJsZXMgYXJlIGRlbm90ZWQgYnkgYSAjLiBOb3RlIHRoYXQgI3Nob3BwaW5nTGlzdEl0ZW0gaXMgdXNlZCB0d2ljZSBidXQgXG5cdC8vIHRoYXQncyBhbGxvd2VkIGJlY2F1c2UgdGhlIGxvY2FsIHZhcmlhYmxlcyBhcmUgaW4gZGlmZmVyZW50IGNvbnRleHRzLlxuXHQvLyBNb2RlbCBiaW5kaW5nIHVzZSBbXSBhbmQgZm9yIHR3by13YXkgYmluZGluZywgdXNlIFsoKV0uXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHVsPlxuXHRcdFx0PGxpIFxuXHRcdFx0Km5nRm9yPVwiI3Nob3BwaW5nTGlzdEl0ZW0gb2Ygc2hvcHBpbmdMaXN0SXRlbXNcIlxuXHRcdFx0KGNsaWNrKT1cIm9uSXRlbUNsaWNrZWQoc2hvcHBpbmdMaXN0SXRlbSlcIlxuXHRcdFx0PlxuXHRcdFx0XHR7e3Nob3BwaW5nTGlzdEl0ZW0ubmFtZX19XG5cdFx0XHQ8L2xpPlxuXHRcdDwvdWw+XG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZEl0ZW0ubmFtZVwiPlxuXHRcdDxidXR0b24gKGNsaWNrKT1cIm9uRGVsZXRlSXRlbSgpXCI+RGVsZXRlIEl0ZW08L2J1dHRvbj48YnI+XG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3Nob3BwaW5nTGlzdEl0ZW0+XG5cdFx0PGJ1dHRvbiAoY2xpY2spPVwib25BZGRJdGVtKHNob3BwaW5nTGlzdEl0ZW0pXCI+QWRkIEl0ZW08L2J1dHRvbj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQge1xuXHRwdWJsaWMgc2hvcHBpbmdMaXN0SXRlbXMgPSBbXG5cdFx0e25hbWU6IFwiRWdnc1wifSxcblx0XHR7bmFtZTogXCJNaWxrXCJ9LFxuXHRcdHtuYW1lOiBcIkJyZWFkXCJ9XG5cdF07XG5cdHB1YmxpYyBzZWxlY3RlZEl0ZW0gPSB7bmFtZTogXCJcIn07XG5cblx0b25JdGVtQ2xpY2tlZChzaG9wcGluZ0xpc3RJdGVtKSB7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBzaG9wcGluZ0xpc3RJdGVtO1xuXHRcdHNob3BwaW5nTGlzdEl0ZW0udmFsdWUgPSBcIlwiO1xuXHR9XG5cblx0Ly8gWW91IGNhbm5vdCBzaW1wbHkgLnB1c2goc2hvcHBpbmdMaXN0SXRlbSkgYmVjYXVzZSBzaG9wcGluZ0xpc3RJdGVtIGlzIGJvdW5kIFxuXHQvLyB0byB0aGUgaW5wdXQgdGFnIGFuZCBub3QgdGhlIHZhbHVlIG9mIHRoZSB1c2VyIGlucHV0LiBTaW5jZSwgZXZlcnkgaXRlbSBpbiBcblx0Ly8gdGhlIHNob3BwaW5nTGlzdEl0ZW1zIGFycmF5IGlzIGFuIG9iamVjdCwgeW91IGhhdmUgdG8gcHVzaCB0aGUgZW50aXJlIGlucHV0IG9iamVjdCBcblx0Ly8gYW5kIHNwZWNpZnkgaXRzIHZhbHVlLiBcblx0b25BZGRJdGVtKHNob3BwaW5nTGlzdEl0ZW0pIHtcblx0XHR0aGlzLnNob3BwaW5nTGlzdEl0ZW1zLnB1c2goeyBuYW1lOiBzaG9wcGluZ0xpc3RJdGVtLnZhbHVlIH0pO1xuXHRcdHNob3BwaW5nTGlzdEl0ZW0udmFsdWUgPSBcIlwiO1xuXHR9XG5cblx0b25EZWxldGVJdGVtKCkge1xuXHRcdHZhciBpdGVtID0gdGhpcy5zaG9wcGluZ0xpc3RJdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKTtcblx0XHR0aGlzLnNob3BwaW5nTGlzdEl0ZW1zLnNwbGljZShpdGVtLCAxKTtcblx0fVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
