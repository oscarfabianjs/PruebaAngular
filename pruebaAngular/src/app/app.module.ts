
import { ToDoListModule } from './modules/to-do-list/to-do-list.module';
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { LoginComponent } from './modules/login/login/login.component';

import { SharedModule } from './shared/shared.module';
import { WelcomePageComponent } from './modules/public-pages/components/welcome-page/welcome-page.component';
import { PhotosPageComponent } from './modules/public-pages/components/photos-page/photos-page.component';
import { AuthGuard } from './shared/guards/auth.guard';



const routes: Routes = [
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: '',
      component: WelcomePageComponent
  },
  {
    path: 'photos',
    component: PhotosPageComponent
  },
  {
      path: '**',
      redirectTo: '/login',
      pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    ToDoListModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
