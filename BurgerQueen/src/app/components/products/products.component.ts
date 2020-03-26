import { Component, OnInit } from '@angular/core';
import{FirebaseService} from "src/app/services/firebase.service"
import {DataOrderService} from "src/app/services/data-order.service"


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  //allProducts: any[]= [];
  productFilter;
  // arrOrder: object[];

  constructor(private firebaseService:FirebaseService, private dataOrderService: DataOrderService) {
    // this.dataOrderService.currentOrder.subscribe(array =>{
    //   this.arrOrder = array;
    //   console.log(this.arrOrder);
    // })
     this.firebaseService.filteredProducts.subscribe({
     next:(value =>{
      this.productFilter = value 
        
      //console.log(value)
      //console.log(this.itemOrder);  
     } 
      )    
   })
   }

  ngOnInit(): void {
   
//this.allProducts;
    // this.firebaseService.getProducts().subscribe({
    //   next: (value) => {
    //     this.allProducts = value;
    //     console.log(this.allProducts);
        
    // this.firebaseService.currentProduct.subscribe({
    //   next: ((values : string) => {
    //   this.productFilter =  this.allProducts.filter((element) => element.category === values)
    //   console.log(this.productFilter);
    
    //   })
    // //this.firebaseService.getProducts()
    //  //console.log(this.firebaseService.getProducts());
    // })
    //   }
    // })

 
  }
  add(product) {
this.dataOrderService.addProductToOrder(product);
    //console.log(product + 'hola aqui');
    //this.arrOrder = product
  }

}


