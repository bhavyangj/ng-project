import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  myproducts: any[]=[];
  constructor() {
    let items = localStorage.getItem('All Products')
    setTimeout(() => {
    }, 100);
    this.myproducts = JSON.parse(items)
    console.log("this:", this.myproducts)
  }

  ngOnInit(): void {
  }

}
