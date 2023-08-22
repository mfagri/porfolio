import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('title', [
      state('void',style({
        opacity:0
      })),

      transition('void => *', [
        style({
          color: '',
    
          transform: 'translateX(-100%)' 
        }),
        animate(1000),
      ]),
      transition('* => void',[
        animate(1000),
        // style({opacity:1,transform: 20,})
      ])
    ]),
    trigger('image', [
      state('void',style({
        opacity:0
      })),

      transition('void => *', [
        style({
          color: '',
    
          transform: 'translateX(100%)' 
        }),
        animate(1000),
      ]),
      transition('* => void',[
        animate(1000),
        // style({opacity:1,transform: 20,})
      ])
    ]),
  ],
})
export class AboutComponent {}
