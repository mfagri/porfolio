import { platformBrowserDynamic , } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { EnvironmentInjector } from '@angular/core';

platformBrowserDynamic().bootstrapModule(AppModule,)
  .catch(err => console.error(err));



