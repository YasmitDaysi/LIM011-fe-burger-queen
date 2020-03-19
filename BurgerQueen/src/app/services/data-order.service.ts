import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataOrderService {
clientName: string;
//arrOrder: object[];
private arrOrder = new BehaviorSubject([]);
currentOrder = this.arrOrder.asObservable();

  constructor() { }

  saveClientName(name){
    this.clientName = name;
   // console.log(this.clientName);
  }
  addProductToOrder(obj) {
    const itemObj = {
      item: obj,
      cantidad: 1
    };

    const newArrObj = [
      ...this.arrOrder.value,
      itemObj
    ]
    // this.arrOrder = obj;
     console.log( obj);
    this.arrOrder.next(newArrObj);
    console.log(this.arrOrder);
    
    // this.arrayOrder.next(value);
  }
  
}
