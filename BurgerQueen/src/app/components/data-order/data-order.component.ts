import { Component, OnInit } from '@angular/core';
import {DataOrderService}from "src/app/services/data-order.service";
import { from } from 'rxjs';
import { element } from 'protractor';
import {FirebaseService} from "src/app/services/firebase.service"
import{FormGroup,FormControl}from '@angular/forms'

@Component({
  selector: 'app-data-order',
  templateUrl: './data-order.component.html',
  styleUrls: ['./data-order.component.scss']
})

export class DataOrderComponent implements OnInit {
  indice: number;
  quantityProducts : number;
  arrOrderProducts: any [];
  totalPrice: number = 0;
  public nameCliente: string;
  public objProducts: object;
  public customerName = '';
  constructor(private dataOrderService: DataOrderService, private firebaseService: FirebaseService ) {

   }
  
  ngOnInit(): void {
   //console.log(this.itemOrder);
   this.dataOrderService.currentOrder.subscribe({ next: (value) => {
     console.log(value);
     
     this.arrOrderProducts = value
     this.addTotalPrice()

    
    } 
  });
  // this.dataOrderService.clientName  = this.nameCliente
  // console.log(this.dataOrderService.clientName );
  
  }

  nameForm = new FormGroup({
    nameValue: new FormControl('')
  });
  
   captureName(){
     this.customerName = this.nameForm.value.nameValue;
     console.log(this.customerName);
     

     //this.dataOrderService.saveClientName(this.nameForm.value.nameValue);
   }
 
  

  addProducts(itemd){
  
  this.indice = this.arrOrderProducts.indexOf(itemd);
  //console.log([this.indice]);

  this.arrOrderProducts[this.indice].quantity = this.arrOrderProducts[this.indice].quantity + 1; 
  this.arrOrderProducts[this.indice].data.price =  this.arrOrderProducts[this.indice].data.price ;

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

   addTotalPrice() {
    this.totalPrice = 0;
    this.arrOrderProducts.forEach((element) => {
      const subtotal = element.quantity * element.data.price
      this.totalPrice += subtotal;
      // this.arrOrderProducts.forEach((element) => {
      if (element.Queso === true && element.Huevo === true) {
        const priceExtra = element.priceExtraTwo * element.quantity;
        this.totalPrice += priceExtra;
        console.log(priceExtra);
      }
      if (element.Queso === true && element.Huevo === undefined) {
        const priceExtra = element.priceExtra * element.quantity;
        this.totalPrice += priceExtra;
      }
      if (element.Huevo === true && element.Queso === undefined) {
        const priceExtra = element.priceExtra * element.quantity;
        this.totalPrice += priceExtra;
      }
      // })
    })
  }


    deleteProduc(obj){
      const indice = this.arrOrderProducts.findIndex((element)=> element.id === obj.id);
      if (indice !== -1) {
       this.arrOrderProducts.splice(indice,1);
     }
     console.log(this.arrOrderProducts);
    }
  
  sendToOrrder(){
   
  const obj = {... this.arrOrderProducts}
  const finalObj = {
    customerName: this.customerName,
    Order: obj,
    totalOrder: this.totalPrice,
    dateOrde:  new Date(),

  }
  this.firebaseService.sendOrderToKitchen(finalObj);
  console.log('enviado');
  }
  
}

