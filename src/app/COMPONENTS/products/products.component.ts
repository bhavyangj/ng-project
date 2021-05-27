import { Component, OnInit, Input } from '@angular/core';
import {ShoppingCartService} from '../../SERVICES/shopping-cart.service'
import { WishlistService } from 'src/app/SERVICES/wishlist.service';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: any []=[];
  // durationInSeconds = 5;

  constructor(
    private shopping_cart: ShoppingCartService, 
    private wishlist: WishlistService,
    // private _snackBar: MatSnackBar
    ) { 
      
    }

  // openSnackBar(str) {
  //   this._snackBar.open(str);
  // }

  ngOnInit(): void {
  }

  addToCart(p){
    this.shopping_cart.addProduct(p)
    alert("Product added to cart")
    // this.openSnackBar("Product added to cart")
  }
  addToWishlist(p){
    alert("Product added to wishlist")
    this.wishlist.addProduct(p)
    // this.openSnackBar("Product added to wishlist")
  }

}
