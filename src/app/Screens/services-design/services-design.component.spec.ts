import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDesignComponent } from './services-design.component';

describe('ServicesDesignComponent', () => {
  let component: ServicesDesignComponent;
  let fixture: ComponentFixture<ServicesDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
