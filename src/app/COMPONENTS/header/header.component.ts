import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { WishlistService } from 'src/app/SERVICES/wishlist.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string;
  searchState: boolean;

  constructor(
    public shoppingCart: ShoppingCartService, 
    public wishlist: WishlistService,
    public app: AppComponent,
    private router: Router,) { }

  ngOnInit(): void {
  }
  searchGo(){
    console.log("search: ", this.searchText)
    return this.searchText
  }
  unfocus(){
    this.searchState = false
  }
  login(){
    this.app.showInfo("logging out...")
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 5000);
  }
  // transform(items: any[], searchText: string): any[] {
  //   if(!items) return [];
  //   if(!searchText) return items;
    
  //   searchText = searchText.toLowerCase();
  //       return items.filter( it => {
  //         return it.name.toLowerCase().includes(searchText);
  //       });
  //  }
}
