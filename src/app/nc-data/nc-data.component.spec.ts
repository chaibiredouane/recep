import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcDataComponent } from './nc-data.component';

describe('NcDataComponent', () => {
  let component: NcDataComponent;
  let fixture: ComponentFixture<NcDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
