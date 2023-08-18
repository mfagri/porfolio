import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface projectinfo{
  name: string,
  visibility:string,
  git_url: string,
  days:string,
  // created_at: string,
  description:string
};
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data:any = [];
  projects: projectinfo[] = [];
  
  async ngOnInit() {
    console.log(await this.getdata().subscribe({
      next:(res)=>{
        this.data =   res
        //  console.log(res);
        //  console.log("f",this.data);
         this.data.forEach((d: any) => {
           this.projects.push({
             name: d.name,
             visibility: d.visibility,
             git_url: d.git_url,
             days: this.make_time(d.created_at),
             description:d.description
           });
         });
      }
    }));
    // this.projects = this.projects.map(project => {
    //   const createdDate = new Date(project.days);
    //   const currentDate = new Date();
    //   const timeDiff = currentDate.getTime() - createdDate.getTime();
    //   const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    //   project.days = daysDiff.toString();
    //   console.log(`Number of days for project "${project.name}": ${daysDiff}`);
    //   return project;
    // });
    console.log("Projects:", this.projects);
  }

  getdata():Observable<any> {
    return this.http.get<any>(
      'https://api.github.com/users/mfagri/repos'
    );
  }
  make_time(time:string)
  {
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