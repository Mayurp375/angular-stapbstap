import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stapbstap';
  names: string ="";

  toChild:string ='This is Parent class'

  count=0;
  counter(data: any){

    data==='add'? this.count++ : this.count--;
    // console.warn(this.count++)
   
  }
}
