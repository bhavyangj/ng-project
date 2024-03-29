import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localstore';
  constructor(private toastr: ToastrService){

  }
  showSuccess(str) {
    this.toastr.success(str);
  }
  showError(str) {
    this.toastr.error(str);
  }
  showInfo(str) {
    this.toastr.info(str);
  }
}
