import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecipientsComponent } from './list-recipients.component';

describe('ListRecipientsComponent', () => {
  let component: ListRecipientsComponent;
  let fixture: ComponentFixture<ListRecipientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecipientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
