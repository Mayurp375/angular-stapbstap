import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stapbstap';
  names: string ="";
  getName(name: any){
    console.warn(name)
    this.names= name;
  }
}
