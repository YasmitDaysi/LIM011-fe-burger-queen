import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataOrderService {
  clientName: string;
  //arrOrder: object[];
  findProducto: [];
   
  private arrOrder = new BehaviorSubject([]);
   public currentOrder = this.arrOrder.asObservable();
  public obj: object;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  saveClientName(name) {
    this.clientName = name;
  }
  
  addProductToOrder(obj) {
    const itemObj = {
      ...obj,
      quantity: 1
    };

    const newArrObj = [
      ...this.arrOrder.value,
      itemObj
    ]
    this.arrOrder.next(newArrObj);

}

// public quantityAddOrder(itemd){
//   let arrayproduc = [];
// const obj:object = this.arrOrder.value.find((element)=>{ 
//   return itemd.id === element.id;
//  }) 

//  if(obj){
//    arrayproduc = this.arrOrder.value.map((element)=>{
//      let objProducto:{}
//      let objProducto2:{}
//      if(itemd.id === element.id){
//       objProducto = {
//         name: element.data.name,
//         price: element.data.price,
//         quantity: element.quantity + 1,
//         id: element.id
//       }
//       return objProducto;
//      }
//      return  objProducto2= {
//        ... objProducto,
//        name: element.data.name,
//        price: element.data.price,
//        quantity: element.quantity + 1,
//        id: element.id
//      };
//    })
   
   
//     console.log(arrayproduc);
  
//  }
//  return this.arrOrder.next(arrayproduc);
//  //return this.arrOrder;
  
// }

  
}












