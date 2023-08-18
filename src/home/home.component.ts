import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
theme() {

  console.log('hello you');
}
  v:boolean = false
  menu(){
    if(this.v === false)
      this.v = true
    else
      this.v = false
  }
}
