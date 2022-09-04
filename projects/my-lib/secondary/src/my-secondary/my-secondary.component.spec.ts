import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondaryComponent } from './my-secondary.component';
import { MockBuilder } from 'ng-mocks';

describe('MySecondaryComponent', () => {
  let component: MySecondaryComponent;
  let fixture: ComponentFixture<MySecondaryComponent>;

  beforeEach(() => {
    return MockBuilder()
      .keep(MySecondaryComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondaryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
