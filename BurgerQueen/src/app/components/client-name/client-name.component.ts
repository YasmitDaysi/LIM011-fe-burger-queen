import { Component} from '@angular/core';
// import { ConnectionService } from 'src/app/services/connection.service';
import{FormGroup,FormControl}from '@angular/forms'
import{DataOrderService} from 'src/app/services/data-order.service'

@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.scss']
})
export class ClientNameComponent  {
 nameForm = new FormGroup({
   nameValue: new FormControl('')
 });
  constructor(private dataOrderService:DataOrderService){}
  captureName(){
    console.log(this.nameForm.value.nameValue);
  
    
    this.dataOrderService.saveClientName(this.nameForm.value.nameValue);
  }


}
