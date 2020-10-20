import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosDontsComponent } from './dos-donts.component';

describe('DosDontsComponent', () => {
  let component: DosDontsComponent;
  let fixture: ComponentFixture<DosDontsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosDontsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosDontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
