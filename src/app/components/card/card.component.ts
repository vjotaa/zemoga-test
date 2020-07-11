import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public finish = false;
  public selectedRating = null;
  @Input() item: People;
  @Input() data: People[];
  constructor() {}

  ngOnInit() {}

  public sendRating(event?) {
    if (event) {
      this.selectedRating = event;
    }
    this.finish = true;
    if (this.selectedRating === 'positive') {
      this.item.positive += 1;
    } else {
      this.item.negative += 1;
    }
    this.item.last_vote = this.selectedRating;
    this.selectedRating = null;
    localStorage.setItem('people', JSON.stringify(this.data));
  }
}
