import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService:CartService,private route:Router) { }
  
  ngOnInit(): void {
  }
  displayCart(){
    
  }
  
}
