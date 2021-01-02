import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/nc_info', title: 'NC Management',  icon: 'settings_applications', class: '' },
    { path: '/expected', title: 'Expected samples',  icon: 'hourglass_top', class: '' },
    { path: '/box_arrival', title: 'Box arrival',  icon:'local_shipping', class: '' },
    { path: '/open_boxes', title: 'Opening boxes',  icon:'inventory_2', class: '' },
    { path: '/form', title: 'Form encoding',  icon:'table_view', class: '' },
    { path: '/nc_report', title: 'Non-Conformity report',  icon:'bug_report', class: '' },
    { path: '/inconsistencies', title: 'Inconsistencies',  icon:'report_problem', class: '' },
    { path: '/drag_drop', title: 'Waiting for process',  icon:'alt_route', class: '' },
    { path: '/centrifugation', title: 'Centrifugation',  icon:'cached', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
