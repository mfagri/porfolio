import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface projectinfo {
  name: string;
  visibility: string;
  git_url: string;
  days: string;
  language: string;
  description: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fide', [
      // state(),
      transition('void => *', [
        style({
          color: 'white',
          opacity: 0,

          transform: 'translateY(100%)',
        }),
        animate(1000),
      ]),
      transition('* => void', [animate(1000), style({ opacity: 0 })]),
    ]),
    trigger('list', [
      transition('* => *', [
        // query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('300ms', [
            animate(
              '1s ease-in',
              keyframes([
               
                style({ opcity: 0, transform: 'translateX(-100%)', offset: 0 }),
                style({
                  opcity: 0.5, 
                  transform: 'translateX(10%)',
                  offset: 0.3,
                }),
                style({ opcity: 1, transform: 'translateX(0)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('100ms', [
            animate(
              '1s ease-in',
              keyframes([
                // style({
                //   color: '',
            
                //   transform: 'translateY(100%)' 
                // }),
               
                style({ opcity: 1, transform: 'translateX(0)', offset: 0 }),
                style({
                  opcity: 0.5,
                  transform: 'translateX(10%)',
                  offset: 0,
                }),
                style({ opcity: 1, transform: 'translateX(-1000%)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: any = [];
  projects: projectinfo[] = [];
  icons: string[] = [
    'src/assets/C.png',
    'src/assets/C++.png',
    'src/assets/Dart.png',
    'src/assets/HTML.png',
    'src/assets/JavaScript.png',
    'src/assets/SCSS.png',
    'src/assets/TypeScript.png',
  ];

  async ngOnInit() {
    console.log(
      await this.getdata().subscribe({
        next: (res) => {
          this.data = res;
          console.log(res);
          //  console.log("f",this.data);
          this.data.forEach((d: any) => {
            var j = d.language;
            if (j === 'CSS') j = 'SCSS';
            this.projects.push({
              name: d.name,
              visibility: d.visibility,
              git_url: d.html_url,
              days: this.make_time(d.created_at),
              description: d.description,
              language: j,
            });
          });
        },
      })
    );
    // this.projects = this.projects.map(project => {
    //   const createdDate = new Date(project.days);
    //   const currentDate = new Date();
    //   const timeDiff = currentDate.getTime() - createdDate.getTime();
    //   const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    //   project.days = daysDiff.toString();
    //   console.log(`Number of days for project "${project.name}": ${daysDiff}`);
    //   return project;
    // });
    console.log('Projects:', this.projects);
  }

  getdata(): Observable<any> {
    return this.http.get<any>('https://api.github.com/users/mfagri/repos');
  }
  make_time(time: string) {
    const createdDate = new Date(time);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - createdDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    time = daysDiff.toString();
    return time;
  }
}
//name
//url
//
