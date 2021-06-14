import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // items: any[];
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    let item = JSON.parse(localStorage.getItem('All Products'))
  }

  // ResetAll(){
  //   this.api.getJson().subscribe(resp => {
  //     this.items = resp
  //   })
  //   setTimeout(() => {
  //     localStorage.setItem('All Products', JSON.stringify(this.items))
  //     localStorage.setItem('Delete', JSON.stringify(null))
  //     // localStorage.setItem('wishlist', JSON.stringify(null))
  //     // localStorage.setItem('placed_items', JSON.stringify(null))
  //     // localStorage.setItem('shopping_cart', JSON.stringify(null))
  //   }, 100);
  // }

}
