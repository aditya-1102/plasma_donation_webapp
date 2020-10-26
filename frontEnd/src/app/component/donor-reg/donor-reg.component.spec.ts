import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorRegComponent } from './donor-reg.component';

describe('DonorRegComponent', () => {
  let component: DonorRegComponent;
  let fixture: ComponentFixture<DonorRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
