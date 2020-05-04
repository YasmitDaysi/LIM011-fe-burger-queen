import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/services/firebase.service"
import { DataOrderService } from "src/app/services/data-order.service"


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  //prueba: any[]
  public productFilter;
  public productsExtra: any[];
  public prodExtraSelected: any;
  public newObjectExtra: {};

  constructor(private firebaseService: FirebaseService, private dataOrderService: DataOrderService) {

    this.firebaseService.filteredProducts.subscribe({
      next: (value => {
        this.productFilter = value
      

      }
      )
    })
    this.firebaseService.extraProducts.subscribe({
      next: (value => {
        this.productsExtra = value;
        

      })
    })

  }

  ngOnInit(): void {


  }

  add(product) {
    this.dataOrderService.addProductToOrder(product);

  }

  addExtras(objTemporal: object) {
    //this.dataOrderService.addProductToOrder(objTemporal)
    this.prodExtraSelected = { ...objTemporal };

   

  }

  addExtrasProduct(extra: string) {
    console.log(extra);

    this.prodExtraSelected[extra] = true;
   


    this.newObjectExtra = {
      ...this.prodExtraSelected,
      priceExtra: 1,
      priceExtraTwo: 2
    }

  }

  addFinalExtras(objeto: object) {
    objeto = this.newObjectExtra

    this.add(objeto);

  }

}


