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
    { path: '/nc_condition', title: 'NC Conditions',  icon: 'handyman', class: '' },
    { path: '/nc_data', title: 'NC Data',  icon: 'bug_report', class: '' },
    { path: '/samples', title: 'Sample Management',  icon: 'extension', class: '' },
    { path: '/boxes', title: 'Boxes',  icon: 'inventory_2', class: '' },
    { path: '/expected', title: 'Expected samples',  icon: 'hourglass_top', class: '' },
    { path: '/open_boxes', title: 'Opening boxes',  icon:'inventory_2', class: '' },
    { path: '/help', title: 'Help',  icon:'help', class: '' },
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
