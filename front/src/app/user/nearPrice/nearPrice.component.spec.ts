/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NearPriceComponent } from './nearPrice.component';

describe('NearPriceComponent', () => {
  let component: NearPriceComponent;
  let fixture: ComponentFixture<NearPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
