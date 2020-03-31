import { Component, OnInit } from '@angular/core';
import {FirebaseService}from 'src/app/services/firebase.service'
@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit { 

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
  sourceProducts(category){
    this.firebaseService.updateCategory(category); 
    // if(category === 'bebidas' || category === 'adicional'){
    //   this.firebaseService.updateCategory(category); 
    // }
//    if(category==='menu'){
// this.firebaseService.getOpcionMenu(category)

//    }
   //this.firebaseService.filterOptions(category);
   console.log(category);
   
    
  }
}
