import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { FormsModule } from "@angular/forms";
import {
  DirectivesComponent,
  DivBgColor,
  CopyPara,
} from "./directives/directives.component";
import { ServerComponent } from "./server/server.component";

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    ServerComponent,
    DivBgColor,
    CopyPara,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
