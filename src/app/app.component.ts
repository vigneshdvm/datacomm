import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datacomm';
  newarray:any;
  booleans:any;
 
   constructor(private api:ApiService){
 
   }
   ngOnInit(){
     this.userdetails();
   }
 
   newEvent(boolean:any){
     this.booleans=boolean;
     console.log(this.booleans)
   }
 
   userdetails(){
     this.api.getUserData().subscribe((data:any)=>{
       this.newarray=data.data;
       console.log(this.newarray)
       
     })    
   }
}
