import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDigitalMarketingComponent } from './services-digital-marketing.component';

describe('ServicesDigitalMarketingComponent', () => {
  let component: ServicesDigitalMarketingComponent;
  let fixture: ComponentFixture<ServicesDigitalMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDigitalMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
