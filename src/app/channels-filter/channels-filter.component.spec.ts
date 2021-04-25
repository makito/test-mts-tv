import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsFilterComponent } from './channels-filter.component';

describe('ChannelsFilterComponent', () => {
  let component: ChannelsFilterComponent;
  let fixture: ComponentFixture<ChannelsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
