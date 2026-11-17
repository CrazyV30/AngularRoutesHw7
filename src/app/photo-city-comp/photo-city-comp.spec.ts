import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCityComp } from './photo-city-comp';

describe('PhotoCityComp', () => {
  let component: PhotoCityComp;
  let fixture: ComponentFixture<PhotoCityComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCityComp],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoCityComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
