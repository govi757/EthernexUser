import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDatabaseComponent } from './services-database.component';

describe('ServicesDatabaseComponent', () => {
  let component: ServicesDatabaseComponent;
  let fixture: ComponentFixture<ServicesDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
