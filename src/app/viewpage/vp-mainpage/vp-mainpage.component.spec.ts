import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpMainpageComponent } from './vp-mainpage.component';

describe('VpMainpageComponent', () => {
  let component: VpMainpageComponent;
  let fixture: ComponentFixture<VpMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpMainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
