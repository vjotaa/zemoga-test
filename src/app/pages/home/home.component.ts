import { Component, OnInit } from '@angular/core';
import data from '../../mockups/data.json';
import { People } from 'src/app/models/people';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public people: People[];
  constructor() {}

  ngOnInit() {
    const storagePeople = JSON.parse(localStorage.getItem('people'));
    if (storagePeople) {
      this.people = storagePeople;
      return;
    }
    this.people = data.people;
    localStorage.setItem('people', JSON.stringify(this.people));
  }
}
