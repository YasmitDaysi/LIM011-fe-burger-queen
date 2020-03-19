import { Component, OnInit } from '@angular/core';
import {DataOrderService}from "src/app/services/data-order.service";
import { from } from 'rxjs';

@Component({
  selector: 'app-data-order',
  templateUrl: './data-order.component.html',
  styleUrls: ['./data-order.component.scss']
})

export class DataOrderComponent implements OnInit {

  itemOrder: any [];
  constructor(private dataOrderService: DataOrderService) {
   this.dataOrderService.currentOrder.subscribe({
     next:(value=>{
      this.itemOrder = value 
      console.log(this.itemOrder);
      
     } 
      )
     
   })
   }


  ngOnInit(): void {
   
  }
  
  

}
