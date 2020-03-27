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
      cantidad: 1
    };

    const newArrObj = [
      ...this.arrOrder.value,
      itemObj
    ]
    //console.log( itemObj);
    this.arrOrder.next(newArrObj);
 
}

public quantityAddOrder(itemd){
  let arrayproduc = [];
  //let ObjPro ={}
// this.currentOrder.subscribe({
//   next: ((value: [])=>{ 
//     this.findProducto = value
//     console.log(this.findProducto);
    
//   })
// })

const arreglo:object = this.arrOrder.value.find((element)=>{ 
//console.log(element);

  return itemd.id === element.id;
 }) 
 console.log(arreglo);
 
  
}


// if(arreglo){
//   arrayproduc = this.itemOrder.map((element)  => {
//     let objetnew: {}
//     if(itemd.id === element.id){
//       objetnew = {
//         name: element.name,
//         price: element.price,
//         cantidad: element.cantidad + 1,
//         id: element.id
//       }
//       return objetnew;
//     } return element;
//   })
 
// }
  
}












