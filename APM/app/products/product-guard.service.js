"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var ProductDetailGuard = (function () {
    function ProductDetailGuard(_router) {
        this._router = _router;
    }
    // Check the url and ensure what's passed in is valid.
    ProductDetailGuard.prototype.canActivate = function (route) {
        // A route is comprised of [action/id] and we check
        // against the id, which is in the 1 index. The + turns
        // the passed string into a number.
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert("Invalid product Id");
            // Start a new navigation to redirect to list page.
            this._router.navigate(["/products"]);
            // Abort the current navigation.
            return false;
        }
        return true;
    };
    ProductDetailGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ProductDetailGuard);
    return ProductDetailGuard;
}());
exports.ProductDetailGuard = ProductDetailGuard;
//# sourceMappingURL=product-guard.service.js.map