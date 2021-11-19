import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBannerComponent } from './cat-banner.component';

describe('CatBannerComponent', () => {
  let component: CatBannerComponent;
  let fixture: ComponentFixture<CatBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
