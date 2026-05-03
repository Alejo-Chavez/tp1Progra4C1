import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIam2 } from './who-iam2';

describe('WhoIam2', () => {
  let component: WhoIam2;
  let fixture: ComponentFixture<WhoIam2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIam2],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoIam2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
