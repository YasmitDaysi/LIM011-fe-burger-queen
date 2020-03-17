import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataOrderService {
clientName: string;
  constructor() { }
  saveClientName(name){
    this.clientName = name;
   // console.log(this.clientName);
  }
}
