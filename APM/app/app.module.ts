import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent }  from "./app.component";
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { ProductModule } from "./products/product.module";

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot([
          { path: "welcome", component: WelcomeComponent },
          { path: "", redirectTo: "welcome", pathMatch: "full" }, // Default route.
          { path: "**", redirectTo: "welcome", pathMatch: "full" } // Wildcard route.
      ]),
      ProductModule // Feature module.
  ],
  declarations: [
      AppComponent,
      WelcomeComponent
  ],
  bootstrap: [ AppComponent ] // Component and template shown first after app boot up.
})
export class AppModule { }
