import { Component, OnInit } from '@angular/core';
import {DataOrderService}from "src/app/services/data-order.service";
import { from } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'app-data-order',
  templateUrl: './data-order.component.html',
  styleUrls: ['./data-order.component.scss']
})

export class DataOrderComponent implements OnInit {
  indice: number;
  quantityProducts : number;
  arrOrderProducts: any [];
  constructor(private dataOrderService: DataOrderService) {

   }
  
  ngOnInit(): void {
   //console.log(this.itemOrder);
   this.dataOrderService.currentOrder.subscribe({ next: (value) => {
     console.log(value);
     
     this.arrOrderProducts = value
    } 
  });
   
  }


  addProducts(itemd){
  
  this.indice = this.arrOrderProducts.indexOf(itemd);
  console.log([this.indice]);

  this.arrOrderProducts[this.indice].quantity = this.arrOrderProducts[this.indice].quantity + 1; 
  this.arrOrderProducts[this.indice].data.price =  this.arrOrderProducts[this.indice].data.price ;
//    const c= this.arrOrderProducts[this.indice].amount = this.arrOrderProducts[this.indice].data.price * this.arrOrderProducts[this.indice].price
// console.log(c);

  }



   subtractProducts(obj){
    this.indice = this.arrOrderProducts.indexOf(obj)

    if(this.arrOrderProducts[this.indice].quantity >=1){
      this.arrOrderProducts[this.indice].quantity = this.arrOrderProducts[this.indice].quantity - 1;
    }
    if(this.arrOrderProducts[this.indice].quantity === 0){
      this.deleteProduc(obj)
    }

   
   }

   deleteProduc(obj){
     const indice = this.arrOrderProducts.findIndex((element)=> element.id === obj.id);
     //console.log(positionProduc);
     if (indice !== -1) {
      this.arrOrderProducts.splice(indice,1);
    }

   }
  
  
}

