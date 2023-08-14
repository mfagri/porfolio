import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  projects: any = ['h', 'h', 'h', 'h', 'm', 'h', 'h', 'h', 'h', 'h'];
  async ngOnInit() {
    console.log(await this.getdata().subscribe({
      next:(res)=>{
        // this.data = res;
        console.log(res);
      }
    }));
  }

  getdata():Observable<any> {
    return this.http.get<any>(
      'https://raw.githubusercontent.com/mfagri/mfagri.github.io/master/ads.json'
    );
  }
}
