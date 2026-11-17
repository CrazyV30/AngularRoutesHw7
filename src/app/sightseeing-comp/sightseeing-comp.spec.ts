import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SightseeingComp } from './sightseeing-comp';

describe('SightseeingComp', () => {
  let component: SightseeingComp;
  let fixture: ComponentFixture<SightseeingComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SightseeingComp],
    }).compileComponents();

    fixture = TestBed.createComponent(SightseeingComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
