import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-inoutdec',
  templateUrl: './inoutdec.component.html',
  styleUrls: ['./inoutdec.component.scss']
})
export class InoutdecComponent implements OnInit {

  @Input() msg:any;
  @Output() newMessage = new EventEmitter();
  name:string="vignesh";
  i:any;
  hold:any;
  boolean=false;
  

  constructor(){
   
  }
  ngOnInit(){
   
  }

  newEvent(){
    this.newMessage.emit(this.boolean=true);
  }
  newEvents(){
    this.newMessage.emit(this.boolean=false);
  }

  


}
