import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categoryList: any = [
    { id: 1, categoryName: 'Radha Krishna', navigationName: 'home' },
    {
      id: 2,
      categoryName: 'Shiv Parvati',
      navigationName: 'home',
    },
    { id: 3, categoryName: 'Lord Hanuman', navigationName: 'home' },
    { id: 4, categoryName: 'Lord Ganesha', navigationName: 'home' },
    { id: 5, categoryName: 'Ram Darbar', navigationName: 'home' },
    {
      id: 6,
      categoryName: 'Handicrafts God Photo frames',
      navigationName: 'home',
    },
    { id: 7, categoryName: 'Customer Review', navigationName: 'home' },
    { id: 8, categoryName: 'About Us', navigationName: 'about' },
    { id: 9, categoryName: 'Contact Us', navigationName: 'contact' },
  ];

  constructor() {}

  ngOnInit() {}
}
