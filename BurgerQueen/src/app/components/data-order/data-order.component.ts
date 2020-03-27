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
  
  quantityProducts : number;
  itemOrder: any [];
   //valorany:any;
  constructor(private dataOrderService: DataOrderService) {

   }
  
   

  ngOnInit(): void {
   //console.log(this.itemOrder);
   this.dataOrderService.currentOrder.subscribe({ next: (value) => {this.itemOrder = value
    } 
  });
   
  }


  addProducts(itemd){
    //console.log("hola aqui");
    //debugger
    let arrayproduc = [];
    //let ObjPro ={}
  // const arreglo:object = this.itemOrder.find(element=>{ 

  //   return itemd.id === element.id
   
  // }) 

this.dataOrderService.addProductToOrder(itemd);
//this.itemOrder = arrayproduc;
//console.log(this.itemOrder);

  }



   subtract(obj){
   this.dataOrderService.quantityAddOrder(obj);
   }
  
  
}

