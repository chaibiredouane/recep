import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedSampleComponent } from './expected-sample.component';

describe('ExpectedSampleComponent', () => {
  let component: ExpectedSampleComponent;
  let fixture: ComponentFixture<ExpectedSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectedSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
