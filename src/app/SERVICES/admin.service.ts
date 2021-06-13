import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  items: any[];
  deleted: any[] =[];
  constructor(private api: ApiService) {}

  getDeletedItem=()=>{
    let items = localStorage.getItem('Delete')
    return JSON.parse(items)
  }
  
  addToDelete = (product)=>{
    let items = this.getDeletedItem();
    if(items){
      items.push(product)
      localStorage.setItem('Delete', JSON.stringify(items))
    } else{
      this.deleted.push(product)
      localStorage.setItem('Delete', JSON.stringify(this.deleted))
    }
  }
  
  getDeleteListLength =()=>{
    let items = this.getDeletedItem();
    return items? this.getDeletedItem().length: 0
  }
  
  getItems=()=>{
    let items = localStorage.getItem('All Products')
    return JSON.parse(items)
  }
  
  removerItem=( product )=>{
    // console.log('calling remover ', product)
    let items = this.getItems();
    
    const index = items.findIndex(item=> item.id == product.id);
    if(index>=0){
      // console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('All Products', JSON.stringify(items))
    }
  }
  
  softDelete=(product)=>{
    let items = JSON.parse(localStorage.getItem('Delete'));
    const index = items.findIndex(item=> item.id == product.id);
    if(index>=0){
      items.splice(index, 1);
      return localStorage.setItem('Delete', JSON.stringify(items))
    }
  }
  
  getAllItems=()=>{
    let items = localStorage.getItem('All Products')
    return JSON.parse(items)
  }
  
  addToAllProduct = (product) => {
    let items = this.getAllItems();
    if(items){
      items.push(product)
      localStorage.setItem('All Products', JSON.stringify(items))
    } else{
      this.items.push(product)
      localStorage.setItem('All Products', JSON.stringify(this.deleted))
    }
  }

}
