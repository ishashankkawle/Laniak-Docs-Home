import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControComponent } from './contro.component';

describe('ControComponent', () => {
  let component: ControComponent;
  let fixture: ComponentFixture<ControComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
