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
  }
  addProductToOrder(obj) {
    const itemObj = {
      ... obj,
      cantidad: 1
    };

    const newArrObj = [
      ...this.arrOrder.value,
      itemObj
    ]
     //console.log( itemObj);
    this.arrOrder.next(newArrObj);

  }

  
  
}
