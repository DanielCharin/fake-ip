import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintsComponent } from './fingerprints.component';

describe('FingerprintsComponent', () => {
  let component: FingerprintsComponent;
  let fixture: ComponentFixture<FingerprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerprintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
