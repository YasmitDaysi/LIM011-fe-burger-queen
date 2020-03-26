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
    let arrayproduc = [];
    //let ObjPro ={}
  const arreglo:object = this.itemOrder.find(element=>{ 

    return itemd.name === element.name
   
  }) 

if(arreglo){
  arrayproduc = this.itemOrder.map((element)  => {
    let objetnew: {}
    if(itemd.id === element.id){
      objetnew = {
        name: element.name,
        price: element.price,
        cantidad: element.cantidad + 1,
        id: element.id
      }
      return objetnew;
    } return element;
  })
 
}

this.itemOrder = arrayproduc;
console.log(this.itemOrder);

  }



   subtract(obj){
  //  this.dataOrderService.subtract(obj);
   }
  
  
}

