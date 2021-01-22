import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartPieComponent } from './dashboard-chart-pie.component';

describe('DashboardChartPieComponent', () => {
  let component: DashboardChartPieComponent;
  let fixture: ComponentFixture<DashboardChartPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardChartPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
