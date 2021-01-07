import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcConditionComponent } from './nc-condition.component';

describe('NcConditionComponent', () => {
  let component: NcConditionComponent;
  let fixture: ComponentFixture<NcConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
