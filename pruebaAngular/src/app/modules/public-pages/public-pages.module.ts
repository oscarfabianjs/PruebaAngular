import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { PhotosPageComponent } from './components/photos-page/photos-page.component';

const routes = [
{
  path: 'photos',
  component: PhotosPageComponent,

  children: [
      {
          path: '',
          component: PhotosPageComponent
      },
      {
          path: '**',
          redirectTo: '',
          pathMatch: 'full'
      }
  ]
}];

@NgModule({
  declarations: [
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicPagesModule { }
