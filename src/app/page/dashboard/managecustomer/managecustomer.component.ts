import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Customer from '../../../model/Customer';

@Component({
  selector: 'app-managecustomer',
  imports: [FormsModule,CommonModule],
  templateUrl: './managecustomer.component.html',
  styleUrl: './managecustomer.component.css'
})
export class ManagecustomerComponent {
  // public customerList:any=[];
  // constructor(private http:HttpClient){
  //  this.loadCustomer();
  // }
  // loadCustomer(){
  //     this.http.get("http://localhost:8080/customer/get-All").subscribe(data=>{
  //       console.log(data);
  //       this.customerList=data;
  //     })
  // }

constructor() {
  new Customer(1, 'saman', 10000);

  let customer:Customer = {
    id: 1,
    name: 'saman',
    salary: 10000
}
let customerList:Customer[] = [
  new Customer(1, 'saman', 10000),
  new Customer(2, 'saman', 10000),
  new Customer(3, 'saman', 10000),
]
let customerList1:Customer[] = [
  {
    id: 1,
    name: 'saman',
    salary: 10000
  },
  {
    id: 2,
    name: 'saman',
    salary: 10000
  },
  {
    id: 3,
    name: 'saman',
    salary: 10000
  },


]



}
}
