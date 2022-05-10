import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-tag',
  templateUrl: './hamburger-tag.component.html',
  styleUrls: ['./hamburger-tag.component.css']
})
export class HamburgerTagComponent implements OnInit {

  menuHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.menuHidden = true;
  }

  showMenu() {
      this.menuHidden=false;
  }

}
