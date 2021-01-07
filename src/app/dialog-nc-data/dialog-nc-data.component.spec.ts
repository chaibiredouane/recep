import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNcDataComponent } from './dialog-nc-data.component';

describe('DialogNcDataComponent', () => {
  let component: DialogNcDataComponent;
  let fixture: ComponentFixture<DialogNcDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNcDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNcDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
