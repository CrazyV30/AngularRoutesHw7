import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SculptureComp } from './sculpture-comp';

describe('SculptureComp', () => {
  let component: SculptureComp;
  let fixture: ComponentFixture<SculptureComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SculptureComp],
    }).compileComponents();

    fixture = TestBed.createComponent(SculptureComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
