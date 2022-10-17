import { Injectable } from '@angular/core';
import {Product} from './product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = [];
  
  
  constructor(private router:Router) { }
  addToCart(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  checkCart(){
    if(this.items.length == 0)
      alert("Your cart is empty");
    else
      this.router.navigateByUrl('./cart');
    
  } 
}
