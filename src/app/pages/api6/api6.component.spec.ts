import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api6Component } from './api6.component';

describe('Api6Component', () => {
  let component: Api6Component;
  let fixture: ComponentFixture<Api6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Api6Component]
    });
    fixture = TestBed.createComponent(Api6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
