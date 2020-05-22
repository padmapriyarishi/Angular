import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPractComponent } from './services-pract.component';

describe('ServicesPractComponent', () => {
  let component: ServicesPractComponent;
  let fixture: ComponentFixture<ServicesPractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
