import { element } from 'protractor';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-kitchen-order',
  templateUrl: './kitchen-order.component.html',
  styleUrls: ['./kitchen-order.component.scss']
})
export class KitchenOrderComponent implements OnInit {
public order = [];

  constructor(private firebaseService:FirebaseService) {}


  ngOnInit(): void {
    this.firebaseService.getOrder().subscribe((orderKitchen)=>{
      this.order =[];
      orderKitchen.forEach((element: any)=>{
        this.order.push({
          id: element.payload.doc,
          data:  element.payload.doc.data()
        });
      })
      
    });
  }

}
