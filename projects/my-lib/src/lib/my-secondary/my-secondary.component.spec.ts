import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondaryComponent } from './my-secondary.component';

describe('MySecondaryComponent', () => {
  let component: MySecondaryComponent;
  let fixture: ComponentFixture<MySecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecondaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
