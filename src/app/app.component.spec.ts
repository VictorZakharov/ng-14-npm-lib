import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockBuilder } from 'ng-mocks';
import { MySecondaryComponent } from 'my-lib/secondary';
import { MyCommonComponent } from 'my-lib';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    return MockBuilder()
      .keep(AppComponent)
      .mock(MyCommonComponent)
      .mock(MySecondaryComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
