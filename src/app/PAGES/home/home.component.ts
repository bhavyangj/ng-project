import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'
import { ApiService } from '../../SERVICES/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[];

  constructor(private api: ApiService, public app: AppComponent) { }

  ngOnInit(): void {
    this.getProducts()
    setTimeout(() => {
      localStorage.setItem("All Products", JSON.stringify(this.items))
    }, 1000);
  }

  getProducts() {
    // this.api.getJson().subscribe(resp => {
    //   this.items = resp
    // })
    this.items = JSON.parse(localStorage.getItem('All Products'))
  }
}
