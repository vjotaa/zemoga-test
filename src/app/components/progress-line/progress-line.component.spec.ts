import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ProgressLineComponent } from './progress-line.component';
import { ElementRef } from '@angular/core';

describe('ProgressLineComponent', () => {
  let component: ProgressLineComponent;
  let fixture: ComponentFixture<ProgressLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressLineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return a correct positive value', () => {
    const expectedValue = 50;
    const value = component.calculateRating(10, 10, 'positive');
    expect(value).toBe(expectedValue.toFixed(1));
  });
  it('should return a correct negative value', () => {
    const expectedValue = 16.7;
    const value = component.calculateRating(1, 5, 'positive');
    expect(value).toBe(expectedValue.toFixed(1));
  });

  it('should negative value be grater than the positive value', () => {
    const positive = component.calculateRating(1, 5, 'positive');
    const negative = component.calculateRating(1, 5, 'negative');
    expect(negative).toBeGreaterThan(positive);
  });

  it('should positive value be grater than the negative value', () => {
    const positive = component.calculateRating(3, 1, 'positive');
    const negative = component.calculateRating(3, 1, 'negative');
    expect(positive).toBeGreaterThan(negative);
  });
});
