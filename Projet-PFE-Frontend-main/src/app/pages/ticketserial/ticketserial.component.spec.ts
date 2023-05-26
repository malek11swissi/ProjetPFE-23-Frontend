import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSerialComponent } from './ticketserial.component';

describe('ProfileComponent', () => {
  let component: TicketSerialComponent;
  let fixture: ComponentFixture<TicketSerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TicketSerialComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
