/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisitshopComponent } from './visitshop.component';

describe('VisitshopComponent', () => {
  let component: VisitshopComponent;
  let fixture: ComponentFixture<VisitshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
