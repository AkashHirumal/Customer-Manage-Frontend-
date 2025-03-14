import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-managecustomer',
  imports: [FormsModule,CommonModule],
  templateUrl: './managecustomer.component.html',
  styleUrl: './managecustomer.component.css'
})
export class ManagecustomerComponent {
  public customerList:any=[];
  constructor(private http:HttpClient){
   this.loadCustomer();
  }
  loadCustomer(){
      this.http.get("http://localhost:8080/customer/get-All").subscribe(data=>{
        console.log(data);
        this.customerList=data;
      })
  }

}
