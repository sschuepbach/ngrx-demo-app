import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddressesFilterComponent} from './addresses-filter';

describe('AddressesFilterComponent', () => {
  let component: AddressesFilterComponent;
  let fixture: ComponentFixture<AddressesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
