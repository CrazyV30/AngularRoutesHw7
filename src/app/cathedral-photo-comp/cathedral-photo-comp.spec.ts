import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CathedralPhotoComp } from './cathedral-photo-comp';

describe('CathedralPhotoComp', () => {
  let component: CathedralPhotoComp;
  let fixture: ComponentFixture<CathedralPhotoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CathedralPhotoComp],
    }).compileComponents();

    fixture = TestBed.createComponent(CathedralPhotoComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
