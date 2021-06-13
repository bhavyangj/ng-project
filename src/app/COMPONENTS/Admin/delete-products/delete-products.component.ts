import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../../SERVICES/admin.service';


@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {
  items: any[]=[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(private adminApi: AdminService) { }

  ngOnInit(): void {
    setTimeout(()=> {
      console.log("Delete: ", this.items)
      this.getDeleteItems()
      console.log("after Delete: ", this.items)
    }, 100);
  }

  getDeleteItems(){
    this.items = this.adminApi.getDeletedItem()
  }

  onRestore(p){
    this.adminApi.softDelete(p)
    this.deleteEvent.emit(p)
    this.adminApi.addToAllProduct(p)
    location.reload()
  //   alert("Product Deleted")
  }

}
