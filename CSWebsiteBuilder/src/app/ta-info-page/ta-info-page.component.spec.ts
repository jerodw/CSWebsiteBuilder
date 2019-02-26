import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaInfoPageComponent } from './ta-info-page.component';

describe('TaInfoPageComponent', () => {
  let component: TaInfoPageComponent;
  let fixture: ComponentFixture<TaInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
