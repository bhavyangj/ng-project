import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminService } from 'src/app/SERVICES/admin.service';
import { ApiService } from '../../../SERVICES/api.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  items: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor(private api: ApiService, private adminApi: AdminService) {  }

  ngOnInit(): void {
    // console.log("----",item)
    // console.log("items: ", this.items)
    setTimeout(() => {
      this.getProducts()
      // localStorage.setItem("All Products", JSON.stringify(this.items))
      console.log("items: ", this.items)
    }, 1000);
  }
  
  getProducts() {
    // this.api.getJson().subscribe(resp => {
      //   this.items = resp
      // })
      
    // let item = JSON.parse(localStorage.getItem('All Products'))
    this.items = JSON.parse(localStorage.getItem('All Products'))
    // console.log("****",localStorage.getItem('All products'))
    console.log("items: ", this.items)
  }

  onDelete(p){
    this.adminApi.removerItem(p)
    this.deleteEvent.emit(p)
    this.adminApi.addToDelete(p)
    alert("Product Deleted")
    location.reload()
  }

}