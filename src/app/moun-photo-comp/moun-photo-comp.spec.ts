import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MounPhotoComp } from './moun-photo-comp';

describe('MounPhotoComp', () => {
  let component: MounPhotoComp;
  let fixture: ComponentFixture<MounPhotoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MounPhotoComp],
    }).compileComponents();

    fixture = TestBed.createComponent(MounPhotoComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
