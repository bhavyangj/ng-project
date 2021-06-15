import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { WishlistService } from 'src/app/SERVICES/wishlist.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginComponent } from 'src/app/PAGES/login/login.component';
import { ApiService } from 'src/app/SERVICES/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string;
  searchState: boolean;
  username: string;

  constructor(
    public shoppingCart: ShoppingCartService, 
    public wishlist: WishlistService,
    public app: AppComponent,
    private spinner: NgxSpinnerService,
    private router: Router,
    public api: ApiService) { 
      
    }
    
  ngOnInit(): void {
    setTimeout(() => {
      this.username = this.api.username
    }, 500);
    // this.spinner.hide();
  }
  searchGo(){
    console.log("search: ", this.searchText)
    return this.searchText
  }
  unfocus(){
    this.searchState = false
  }
  login(){
    // this.spinner.show();
    setTimeout(() => {
      // this.spinner.hide();
      this.router.navigate(['/login'])
    }, 1000);
  }
  
}
