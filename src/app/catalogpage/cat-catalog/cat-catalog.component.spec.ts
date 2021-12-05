import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCatalogComponent } from './cat-catalog.component';

describe('CatCatalogComponent', () => {
  let component: CatCatalogComponent;
  let fixture: ComponentFixture<CatCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
