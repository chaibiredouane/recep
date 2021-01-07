import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNcConditionComponent } from './dialog-nc-condition.component';

describe('DialogNcConditionComponent', () => {
  let component: DialogNcConditionComponent;
  let fixture: ComponentFixture<DialogNcConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNcConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNcConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
