import { Component, OnInit } from '@angular/core';
import { DataOrderService } from "src/app/services/data-order.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-order',
  templateUrl: './data-order.component.html',
  styleUrls: ['./data-order.component.scss']
})

export class DataOrderComponent implements OnInit {
  public indice: number;
  public quantityProducts: number;
  public  arrOrderProducts: any[];
  public totalPrice: number = 0;
  public nameCliente: string;
  public objProducts: object;
  public customerName = '';
  constructor(private dataOrderService: DataOrderService, private firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    this.dataOrderService.currentOrder.subscribe({
      next: (value) => {
        

        this.arrOrderProducts = value
        this.addTotalPrice()


      }
    });


  }

  nameForm = new FormGroup({
    nameValue: new FormControl('')
  });

  captureName() {
    this.customerName = this.nameForm.value.nameValue;
   

  }



  addProducts(itemd) {

    this.indice = this.arrOrderProducts.indexOf(itemd);
    this.arrOrderProducts[this.indice].quantity = this.arrOrderProducts[this.indice].quantity + 1;
    this.arrOrderProducts[this.indice].data.price = this.arrOrderProducts[this.indice].data.price;
    this.addTotalPrice()
  }



  subtractProducts(obj) {
    this.indice = this.arrOrderProducts.indexOf(obj)

    if (this.arrOrderProducts[this.indice].quantity >= 1) {
      this.arrOrderProducts[this.indice].quantity = this.arrOrderProducts[this.indice].quantity - 1;
    }
    if (this.arrOrderProducts[this.indice].quantity === 0) {
      this.deleteProduc(obj)
    }

    this.addTotalPrice()
  }

  addTotalPrice() {
    this.totalPrice = 0;
    this.arrOrderProducts.forEach((element) => {
      const subtotal = element.quantity * element.data.price
      this.totalPrice += subtotal;
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
    })
  }


  deleteProduc(obj) {
    const indice = this.arrOrderProducts.findIndex((element) => element.id === obj.id);
    if (indice !== -1) {
      this.arrOrderProducts.splice(indice, 1);
      this.addTotalPrice()
    }
    

  }

  sendToOrrder() {

    const obj = { ... this.arrOrderProducts }
    const finalObj = {
      customerName: this.customerName,
      Order: obj,
      totalOrder: this.totalPrice,
      dateOrde: new Date(),

    }
    this.firebaseService.sendOrderToKitchen(finalObj);
    
  }

}

