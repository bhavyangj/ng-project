import { Component, Input, OnInit } from '@angular/core';
import { OrderPlacedService} from 'src/app/SERVICES/order-placed.service';


@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {
  items: any[];
  // @Input() placedItems: any[];
  constructor(public orderlist: OrderPlacedService) { }

  ngOnInit(): void {
    this.getPlaceditems()
  }
  getPlaceditems(){
    this.items = this.orderlist.getOrderItems();
    console.log("this.placedItems: ", this.items)
  }
  deleteEventHandler(p){
    console.log("event handled")
    this.getPlaceditems()
  }

}
