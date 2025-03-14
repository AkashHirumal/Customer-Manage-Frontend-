import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcustomer',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddcustomerComponent {
  public username:string="saman";

  public customers =[
    {
      name: "saman",
      address: "colombo",
      salary: 10000
    },
    {
      name: "kamal",
      address: "badulla",
      salary: 20000
    },
    {
      name: "vimal",
      address: "panadura",
      salary: 65000
    },
    {
      name: "saman",
      address: "colombo",
      salary: 10000
    }
  ]

}
