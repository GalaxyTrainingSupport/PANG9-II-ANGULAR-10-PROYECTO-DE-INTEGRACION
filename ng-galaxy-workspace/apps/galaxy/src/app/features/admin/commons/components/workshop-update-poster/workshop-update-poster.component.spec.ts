import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopUpdatePosterComponent } from './workshop-update-poster.component';

describe('WorkshopUpdatePosterComponent', () => {
  let component: WorkshopUpdatePosterComponent;
  let fixture: ComponentFixture<WorkshopUpdatePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopUpdatePosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopUpdatePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
