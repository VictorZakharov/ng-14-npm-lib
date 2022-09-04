import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommonComponent } from './my-common.component';
import { MockBuilder } from 'ng-mocks';

describe('MyCommonComponent', () => {
  let component: MyCommonComponent;
  let fixture: ComponentFixture<MyCommonComponent>;

  beforeEach(() => {
    return MockBuilder()
      .keep(MyCommonComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
