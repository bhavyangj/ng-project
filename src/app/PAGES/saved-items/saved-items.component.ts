import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/SERVICES/wishlist.service';
@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.css']
})
export class SavedItemsComponent implements OnInit {
  items: any [];

  constructor(public wishlist: WishlistService) { }
  ngOnInit(): void {
    this.getWishlist()
  }


  getWishlist(){
   this.items =  this.wishlist.getWishlistItems();
  }

  deleteEventHandler(p){
    console.log("event handled")
    this.getWishlist()
  }
}