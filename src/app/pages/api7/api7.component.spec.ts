import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api7Component } from './api7.component';

describe('Api7Component', () => {
  let component: Api7Component;
  let fixture: ComponentFixture<Api7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Api7Component]
    });
    fixture = TestBed.createComponent(Api7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
