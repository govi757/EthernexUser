import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBussinessConsultationComponent } from './services-bussiness-consultation.component';

describe('ServicesBussinessConsultationComponent', () => {
  let component: ServicesBussinessConsultationComponent;
  let fixture: ComponentFixture<ServicesBussinessConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesBussinessConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesBussinessConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
