import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpPagelistComponent } from './vp-pagelist.component';

describe('VpPagelistComponent', () => {
  let component: VpPagelistComponent;
  let fixture: ComponentFixture<VpPagelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpPagelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpPagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
