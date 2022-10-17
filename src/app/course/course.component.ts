import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  items :Product = [];
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router:Router
  ) { }
  
  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Learn Angular','price':'$200','description':'Angular is an application-design framework and development platform for sophisticated single-page apps.','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn Typescript','price':'$50','description':'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','price':'$350','description':'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine.','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Learn Reactjs','price':'$600','description':'ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components.','image':'../../assets/reactjs.jpg'},
  ]

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  clearCart(){
    this.cartService.clearCart();
    window.alert('Your cart is empty');
  }
  getItems() {
    return this.cartService.getItems();
  }
  checkCart(){
    return this.cartService.checkCart();
  }
}
