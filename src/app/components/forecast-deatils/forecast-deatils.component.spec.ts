import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDeatilsComponent } from './forecast-deatils.component';

describe('ForecastDeatilsComponent', () => {
  let component: ForecastDeatilsComponent;
  let fixture: ComponentFixture<ForecastDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
