import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../SERVICES/shopping-cart.service'
import { WishlistService } from '../../SERVICES/wishlist.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() products: any[] =[];
  bindId: any;
  
  constructor(public shopping_cart: ShoppingCartService,
    public wishlist: WishlistService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts()
    this._route.params.forEach((params) => {
      this.bindId = params["id"]
    })

    console.log("Bid id : ",this.bindId)
    // this.getProductDetails()
  }
  // onclick(item,products){
  //   console.log("item:", item)
  //   console.log("Products : ",products)
  // }

  // getProducts(){
  //   this.products = localStorage.getItem('Products')
  // }
  getProducts =()=>{
    let items = this.getProductItems();
    this.products = items
    console.log("Product in so:" , this.products)
  }
  getProductItems=()=>{
    let items = localStorage.getItem('All Products')
    return JSON.parse(items)
  }

  // getProductDetails(){
  //   this.products.forEach(element => {
  //     if(element.id == this.bindId){
  //       console.log("Selected Elemet : ",element)
  //     }
  //   })
  // }
}
