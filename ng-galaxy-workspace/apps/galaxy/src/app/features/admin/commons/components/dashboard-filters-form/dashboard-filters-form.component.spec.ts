import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFiltersFormComponent } from './dashboard-filters-form.component';

describe('DashboardFiltersFormComponent', () => {
  let component: DashboardFiltersFormComponent;
  let fixture: ComponentFixture<DashboardFiltersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFiltersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFiltersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
