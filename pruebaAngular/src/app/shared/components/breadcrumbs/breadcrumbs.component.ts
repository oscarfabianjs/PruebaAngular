import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() icon: string = '';
  @Input() path: string = '';
  @Input() title: string = '';
  @Input() showPreventBackActionMessage: boolean = false;
  @Input() route: string = '';
  @Input() routeParams: object = {};
  @Input() focusCancel: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate([this.route]);
  }
}
