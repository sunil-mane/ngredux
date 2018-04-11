import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { HttpModule } from "@angular/http";

import { RoutingModule } from "./routing/routing.module";
import { AppComponent } from "./app.component";
import { IAppState, store } from "./store";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgReduxModule, RoutingModule, HttpModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
