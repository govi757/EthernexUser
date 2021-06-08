import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDevelopmentComponent } from './services-development.component';

describe('ServicesDevelopmentComponent', () => {
  let component: ServicesDevelopmentComponent;
  let fixture: ComponentFixture<ServicesDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
