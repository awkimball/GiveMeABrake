/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PricecheckComponent } from './pricecheck.component';

describe('PricecheckComponent', () => {
  let component: PricecheckComponent;
  let fixture: ComponentFixture<PricecheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
