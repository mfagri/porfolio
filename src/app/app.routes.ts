import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/home/about/about.component';
import { ProjectsComponent } from 'src/home/projects/projects.component';
import { UsesComponent } from 'src/home/uses/uses.component';


const routes: Routes = [{ path: '', component: AboutComponent},
  {
    path: 'projects', component: ProjectsComponent
  },
  {

    path: 'uses', component: UsesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }