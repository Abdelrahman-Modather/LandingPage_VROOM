/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Know_moreComponent } from './know_more.component';

describe('Know_moreComponent', () => {
  let component: Know_moreComponent;
  let fixture: ComponentFixture<Know_moreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Know_moreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Know_moreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
