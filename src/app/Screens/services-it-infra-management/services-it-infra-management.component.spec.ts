import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesItInfraManagementComponent } from './services-it-infra-management.component';

describe('ServicesItInfraManagementComponent', () => {
  let component: ServicesItInfraManagementComponent;
  let fixture: ComponentFixture<ServicesItInfraManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesItInfraManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesItInfraManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
