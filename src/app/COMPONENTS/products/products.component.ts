import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../SERVICES/shopping-cart.service'
import { WishlistService } from 'src/app/SERVICES/wishlist.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component'
import { HeaderComponent } from 'src/app/COMPONENTS/header/header.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: any = [];
  filteredProducts: any = [];
  searchproducts: any = [];
  rating: number;
  categoryName: string;
  searchText: string;
  visibility: boolean = true
  max: number;
  min: number;
  step: number;
  thumbLabel: boolean;
  value: number;

  constructor(
    private spinner: NgxSpinnerService,
    public shopping_cart: ShoppingCartService,
    public wishlist: WishlistService,
    public header: HeaderComponent,
    private router: Router,
    public app: AppComponent
  ) {
    this.searchproducts = [];
    this.categoryName = "all";
    this.rating = 1;
    this.max = 100000;
    this.min = 0;
    this.step = 10;
    this.thumbLabel = true;
    this.searchText = "";
    this.value = 0;
    this.clearcategory()
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.filterCategory()
      this.spinner.hide();
    }, 2000);
  }

  setrating(num) {
    this.rating = num
    this.visibility = false
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();  
      this.visibility = true
    }, 800);
  }

  filterSearch() {
    this.searchproducts = this.products.filter(x =>
      x.title.includes(this.searchText)
    );
    console.log("searchitems: ", this.searchproducts)
  }
  searchGo(){
    console.log("search:" , this.searchText)
    this.filterSearch()
  }

  filter = { electronics: true, fashion: true, mobiles: true, computers: true, books: true, beauty: true };
  filterCategory() {
    this.filteredProducts = this.products.filter(x =>
      (x.category === 'electronics' && this.filter.electronics)
      || (x.category === 'fashion' && this.filter.fashion)
      || (x.category === 'mobiles' && this.filter.mobiles)
      || (x.category === 'computers' && this.filter.computers)
      || (x.category === 'books' && this.filter.books)
      || (x.category === 'beauty' && this.filter.beauty)
    );
    console.log(this.filteredProducts)
  }
  setdefaultfilter() {
    this.header.searchState = false
    this.categoryName = "all";
    this.rating = 1;
    this.max = 100000;
    this.min = 0;
    this.step = 10;
    this.thumbLabel = true;
    this.value = 0;
    this.searchText = "";
    this.clearcategory()
  }

  selectall() {
    this.filter.electronics = false;
    this.filter.books = false;
    this.filter.computers = false;
    this.filter.mobiles = false;
    this.filter.fashion = false;
    this.filter.beauty = false;
    this.filterCategory()
  }
  clearcategory() {
    this.filter.electronics = true;
    this.filter.books = true;
    this.filter.computers = true;
    this.filter.mobiles = true;
    this.filter.fashion = true;
    this.filter.beauty = true;
    this.filterCategory()
  }


  addToCart(p) {
    let items = this.shopping_cart.getCartItems()
    if(!items.some((item)=> item.id == p.id)){
      this.shopping_cart.addProduct(p)
      this.app.showSuccess("Product added to cart")
    }
    else{
      this.app.showError("Product already available in cart")
    }
  }
  addToWishlist(p) {
    let items = this.wishlist.getWishlistItems()
    if(!items.some((item)=> item.id == p.id)){
      this.wishlist.addProduct(p)
      this.app.showSuccess("Product added to wishlist")
    }
    else{
      this.app.showError("Product already available in wishlist")
    }
  }

  //move to product detail page
  onClick(item) {
    // console.log("Products abcd: ",this.products)
    // localStorage.setItem('Products',JSON.stringify(this.products))
    this.router.navigate(['/product-detail/' + item.id])
  }

}
