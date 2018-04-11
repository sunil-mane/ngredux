import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "../pages/home/home.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { LoginComponent } from "../pages/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, LoginComponent, DashboardComponent]
})
export class RoutingModule {}
