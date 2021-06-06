import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
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
      alert("please select login type!")
    }
  }

}
