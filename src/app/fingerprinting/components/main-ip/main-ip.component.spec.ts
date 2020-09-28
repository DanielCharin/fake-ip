import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIpComponent } from './main-ip.component';

describe('MainIpComponent', () => {
  let component: MainIpComponent;
  let fixture: ComponentFixture<MainIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
