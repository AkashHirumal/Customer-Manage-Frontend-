import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AddcustomerComponent } from './page/dashboard/addcustomer/addcustomer.component';
import { ManagecustomerComponent } from './page/dashboard/managecustomer/managecustomer.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [

    {
        path:"singup",
        component:RegisterComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent,
        children:[
            {
                path:"add-customer",
                component:AddcustomerComponent
            },
            {
                path:"manage-customer",
                component:ManagecustomerComponent
            }
        ]
    }
];
