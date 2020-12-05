import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopRegisterView } from './workshop-register.view';

describe('WorkshopRegisterView', () => {
  let component: WorkshopRegisterView;
  let fixture: ComponentFixture<WorkshopRegisterView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopRegisterView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopRegisterView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
