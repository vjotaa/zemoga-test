import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressLineComponent } from '../progress-line/progress-line.component';
import data from '../../mockups/data.json';
import { VoteCardComponent } from './vote-card.component';

describe('VoteCardComponent', () => {
  let component: VoteCardComponent;
  let fixture: ComponentFixture<VoteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoteCardComponent, ProgressLineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteCardComponent);
    component = fixture.componentInstance;
    component.item = data.people[1];
    fixture.detectChanges();
  });

  it('should finish variable be true', () => {
    component.selectedRating = 'positive';
    component.sendRating();
    expect(component.finish).toBeTruthy();
  });

  it('should positive variable be greater', () => {
    component.selectedRating = 'positive';
    component.item.positive = 2;
    component.sendRating();
    expect(component.item.positive).toBe(3);
  });

  it('should negative variable be greater', () => {
    component.selectedRating = 'negative';
    component.item.negative = 2;
    component.sendRating();
    expect(component.item.negative).toBe(3);
  });
});
