import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppCommonsComponent } from './my-app-commons.component';

describe('MyAppCommonsComponent', () => {
  let component: MyAppCommonsComponent;
  let fixture: ComponentFixture<MyAppCommonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppCommonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
