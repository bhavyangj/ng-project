import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: string = '';
  username: string = '';
  items: any[] = [];

  constructor(private router: Router, 
    public app: AppComponent,
    public api: ApiService) {
    }

  ngOnInit(): void {
    this.getProducts()
    // this.app.showInfo("Select login type and login" )
  }

  getProducts(){
    this.api.getJson().subscribe(resp => {
      this.items = resp
    })
    setTimeout(() => {
      if(localStorage.getItem("All Products") === null) {
        localStorage.setItem('All Products', JSON.stringify(this.items))
      }
      
      if (localStorage.getItem("Delete") === null) {
        localStorage.setItem('Delete', JSON.stringify([]))
      }

      if (localStorage.getItem("wishlist") === null) {
        localStorage.setItem('wishlist', JSON.stringify([]))
      }

      if (localStorage.getItem("placed_items") === null) {
        localStorage.setItem('placed_items', JSON.stringify([]))
      }

      if (localStorage.getItem("shopping_cart") === null) {
        localStorage.setItem('shopping_cart', JSON.stringify([]))
      }
    }, 100);
  }

  changeUser(){
    this.api.username = this.username
    console.log(this.username)
  }


  selectauth(event:any){
    this.auth = event.target.value;
  }


  login() {
    if (this.auth=="Admin") {
      this.router.navigate(['/admin'])
    } else if (this.auth=="User") {
      this.router.navigate(['/home'])
    }
    else{
      this.app.showError("please select login type!")
    }
  }

}
