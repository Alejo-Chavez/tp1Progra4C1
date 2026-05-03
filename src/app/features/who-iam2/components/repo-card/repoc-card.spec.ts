import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepocCard } from './repoc-card';

describe('RepocCard', () => {
  let component: RepocCard;
  let fixture: ComponentFixture<RepocCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepocCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RepocCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
