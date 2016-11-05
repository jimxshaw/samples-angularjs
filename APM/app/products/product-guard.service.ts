import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {

    }

    // Check the url and ensure what's passed in is valid.
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // A route is comprised of [action/id] and we check
        // against the id, which is in the 1 index. The + turns
        // the passed string into a number.
        let id = +route.url[1].path;

        if (isNaN(id) || id < 1) {
            alert("Invalid product Id");
            // Start a new navigation to redirect to list page.
            this._router.navigate(["/products"]);
            // Abort the current navigation.
            return false;
        }

        return true;
    }
}