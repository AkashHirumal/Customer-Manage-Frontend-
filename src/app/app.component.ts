import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from "./page/login/login.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { ManagecustomerComponent } from "./page/dashboard/managecustomer/managecustomer.component";
import { RegisterComponent } from "./page/register/register.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, DashboardComponent, ManagecustomerComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'customer_crud_frontend-app';
  ngOnInit(): void {
    initFlowbite();
  }
}
