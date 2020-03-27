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


  constructor(private firebaseService:FirebaseService, private dataOrderService: DataOrderService) {

     this.firebaseService.filteredProducts.subscribe({
     next:(value =>{
      this.productFilter = value 
    
     } 
      )    
   })
   }

  

  ngOnInit(): void {
    // this.firebaseService.getdata().subscribe((productsSnapshot) => {
    //   this.prueba = [];
    //   productsSnapshot.forEach((productData: any) => {
    //     this.prueba.push({
    //       id: productData.payload.doc.id,
    //       data: productData.payload.doc.data()
    //     });
    //   });
    //  this.firebaseService.llamarfuncion(this.prueba) ;
    // });
 
  }
  add(product) {
this.dataOrderService.addProductToOrder(product);

  }

}


