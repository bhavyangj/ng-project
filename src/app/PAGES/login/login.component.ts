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
  items: any[] = [];

  constructor(private router: Router, 
    public app: AppComponent,
    public api: ApiService) { }

  ngOnInit(): void {
    this.getProducts()
    this.app.showInfo("Select login type and login")
  }

  getProducts(){
    this.api.getJson().subscribe(resp => {
      this.items = resp
    })
    setTimeout(() => {
      localStorage.setItem("All Products", JSON.stringify(this.items))
      localStorage.setItem("Delete", JSON.stringify(null))
    }, 100);
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
