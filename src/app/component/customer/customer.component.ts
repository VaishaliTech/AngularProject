import { Component, OnInit } from '@angular/core';
// import * as data from './customerList.json';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerList: any = '';
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("assets/customerList.json").subscribe(data =>{
      this.customerList = data;
      console.log(this.customerList.CustomerData);
    });
  }

  editProfile(cData): void {
    this.router.navigate(['/customerProfile']);
    // this.router.navigate([`/customerProfile/${cData}`]);
  }

}
