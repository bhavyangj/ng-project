import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { WishlistService } from 'src/app/SERVICES/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService, public wishlist: WishlistService) { }

  ngOnInit(): void {
  }

}
