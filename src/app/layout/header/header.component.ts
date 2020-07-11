import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public checkbox = false;
  constructor() {}

  ngOnInit() {}

  selected() {
    this.checkbox = !this.checkbox;
  }
}
