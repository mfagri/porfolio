import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  darkmode = false;
// isSubscribedToEmailsMessage: string|null;
theme() {
  this.darkmode = !this.darkmode;
  document.documentElement.setAttribute('data-theme',this.darkmode?"dark":"light")
  console.log('hello you');

}
  v:boolean = false
  menu(){
    this.v = !this.v
  }
}
