import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WishlistService {
  wishlist: any[]=[];

  constructor() { }
  
  getWishlistItems=()=>{
    let items = localStorage.getItem('wishlist')
    return JSON.parse(items)
  }

  addProduct = (product)=>{
    let items = this.getWishlistItems();
    if(items){
      items.push(product)
      localStorage.setItem('wishlist', JSON.stringify(items))

    }else{
      this.wishlist.push(product);
       localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
    }    
  }

  
  getWishlistLength =()=>{
    let items = this.getWishlistItems();
    return items? this.getWishlistItems().length: 0
  }
  getTotal = ()=>{
    let items = this.getWishlistItems();
    return items?.reduce((acc, item)=> acc+ item.price, 0)
  }

  removerItem=( product )=>{
    console.log('calling remover ', product)
    let items = this.getWishlistItems();
    
    const index = items.findIndex(item=> item.id == product.id);
    if(index>=0){
      console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('wishlist', JSON.stringify(items))
    }

  }
}
