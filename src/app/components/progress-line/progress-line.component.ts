import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-line',
  templateUrl: './progress-line.component.html',
  styleUrls: ['./progress-line.component.scss'],
})
export class ProgressLineComponent implements OnInit {
  @Input() positive;
  @Input() negative;
  @Output() selectedRating = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  public calculateRating(
    positive: number,
    negative: number,
    valueToReturn: string
  ): any {
    const totalScore = positive + negative;
    const negativeRating = (negative * 100) / totalScore;
    const positiveRating = (positive * 100) / totalScore;
    if (valueToReturn === 'positive') {
      return positiveRating.toFixed(1);
    }
    return negativeRating.toFixed(1);
  }

  public selectRating(ratingType: string) {
    this.selectedRating.emit(ratingType);
  }
}
