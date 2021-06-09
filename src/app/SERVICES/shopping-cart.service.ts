import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any[]=[];

  constructor() { }
  
  getCartItems=()=>{
    let items = localStorage.getItem('shopping_cart')
    return JSON.parse(items)
  }

  addProduct = (product)=>{
    let items = this.getCartItems();
    if(items){
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))

    }else{
      this.shopping_cart_items.push(product);
       localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }    
  }

  
  getCartLength =()=>{
    let items = this.getCartItems();  
    return items? this.getCartItems().length: 0
  }
  getTotal = ()=>{
    let items = this.getCartItems();
    return items?.reduce((acc, item)=> acc+ (item.price)*(item.quantity), 0)
  }

  removerItem=( product )=>{
    console.log('calling remover ', product)
    let items = this.getCartItems();
    
    const index = items.findIndex(item=> item.id == product.id);
    if(index>=0){
      console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }
  }
}
