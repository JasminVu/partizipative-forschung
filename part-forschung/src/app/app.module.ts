import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { AppComponent } from './app.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule, BrowserModule, RouterModule.forRoot(routes, routerOptions),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }