import { Component, OnInit } from '@angular/core';
import{FirebaseService} from "src/app/services/firebase.service"
import {DataOrderService} from "src/app/services/data-order.service"


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  //prueba: any[]
  productFilter;
  public productsExtra:any[];

  constructor(private firebaseService:FirebaseService, private dataOrderService: DataOrderService) {

     this.firebaseService.filteredProducts.subscribe({
     next:(value =>{
      this.productFilter = value 
     // console.log(this.productFilter);
    
     } 
      )    
   })
 this.firebaseService.extraProducts.subscribe({
  next:(value =>{
    this.productsExtra = value;
    console.log(this.productsExtra);

  })
})


  
   
   }

  

  ngOnInit(): void {
   
 
  }
  add(product) {
this.dataOrderService.addProductToOrder(product);

  }

}


