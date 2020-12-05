import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyCommonsComponent } from './galaxy-commons.component';

describe('GalaxyCommonsComponent', () => {
  let component: GalaxyCommonsComponent;
  let fixture: ComponentFixture<GalaxyCommonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyCommonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
