import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNcInfoComponent } from './dialog-nc-info.component';

describe('DialogNcInfoComponent', () => {
  let component: DialogNcInfoComponent;
  let fixture: ComponentFixture<DialogNcInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNcInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
