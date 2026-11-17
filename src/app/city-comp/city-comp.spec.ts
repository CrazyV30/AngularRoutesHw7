import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityComp } from './city-comp';

describe('CityComp', () => {
  let component: CityComp;
  let fixture: ComponentFixture<CityComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityComp],
    }).compileComponents();

    fixture = TestBed.createComponent(CityComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
