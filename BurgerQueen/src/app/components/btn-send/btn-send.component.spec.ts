import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSendComponent } from './btn-send.component';

describe('BtnSendComponent', () => {
  let component: BtnSendComponent;
  let fixture: ComponentFixture<BtnSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
