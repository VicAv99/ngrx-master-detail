import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products = [
    {
      id: 1,
      productName: 'Hammer',
      productCode: '#AZ123',
      price: 4.99,
      category: 'Maintenance',
      rating: 3.5
    },
    {
      id: 2,
      productName: 'Fan',
      productCode: '#FN876',
      price: 12.75,
      category: 'Maintenance',
      rating: 4.8
    },
    {
      id: 3,
      productName: 'T-Shirt',
      productCode: '#TSH150',
      price: 2.99,
      category: 'Clothing',
      rating: 2
    }
  ];

  constructor() {}

  ngOnInit() {}
}
