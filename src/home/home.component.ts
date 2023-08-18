import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  darkmode = false;
theme() {
  this.darkmode = !this.darkmode;
  document.documentElement.setAttribute('data-theme',this.darkmode?"dark":"light")
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
