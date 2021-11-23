
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';



@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
