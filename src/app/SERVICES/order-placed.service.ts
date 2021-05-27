import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderPlacedService {
  placed_items: any[]=[];

  constructor() { }
  getOrderItems=()=>{
    let items = localStorage.getItem('placed_items')
    return JSON.parse(items)
  }

  addProduct = (product)=>{
    let items = this.getOrderItems();
    if(items){
      items.push(product)
      localStorage.setItem('placed_items', JSON.stringify(items))

    }else{
      this.placed_items.push(product);
       localStorage.setItem('placed_items', JSON.stringify(this.placed_items))
    }    
  }

  
  getOrderLength =()=>{
    let items = this.getOrderItems();
    return items? this.getOrderItems().length: 0
  }
  getTotal = ()=>{
    let items = this.getOrderItems();
    return items?.reduce((acc, item)=> acc+ item.price, 0)
  }

  removerItem=( product )=>{
    console.log('calling remover ', product)
    let items = this.getOrderItems();
    
    const index = items.findIndex(item=> item.id == product.id);
    if(index>=0){
      console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('placed_items', JSON.stringify(items))
    }
  }
}
