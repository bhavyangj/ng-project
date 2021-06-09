import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: string = '';

  constructor(private router: Router, public app: AppComponent) { }

  ngOnInit(): void {
    this.app.showInfo("Select login type and login")
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
