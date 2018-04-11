import { Component } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "./store";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(ngRedux: NgRedux<IAppState>) {
    console.log(ngRedux.getState());
  }
}
