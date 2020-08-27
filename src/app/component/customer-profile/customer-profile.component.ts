import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  @Input() selectedData: string;
  constructor() { }

  ngOnInit(): void {
    console.log('selectedData', this.selectedData);
  }

}
