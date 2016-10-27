import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "./product";

@Pipe({
    name: "productFilter"
})
export class ProductFilterPipe implements PipeTransform {

    // We take in a list of products and transform it based on a user entered filter string.
    transform(value: IProduct[], filterBy: string): IProduct[] {

        // If a filter string exists then lower case it, otherwise assign null to it.
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        // If the filter string isn't null then we filter the product list, otherwise return
        // the original list.
        return filterBy ? value.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }

}