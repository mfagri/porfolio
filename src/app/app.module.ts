import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from 'src/home/home.component';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from 'src/home/nav/nav.component';
import { AboutComponent } from 'src/home/about/about.component';
import { ProjectsComponent } from 'src/home/projects/projects.component';
import { UsesComponent } from 'src/home/uses/uses.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ProjectsComponent,
    UsesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatMenuModule, MatIconModule,HttpClientModule,MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
