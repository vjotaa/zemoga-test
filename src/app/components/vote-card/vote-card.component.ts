import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.scss'],
})
export class VoteCardComponent implements OnInit {
  @Input() item: People;
  @Input() data: People[];
  public finish = false;
  public selectedRating = null;
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

  public selectRating(rating) {
    this.selectedRating = rating;
  }

  public voteAgain() {
    this.finish = false;
  }
}
