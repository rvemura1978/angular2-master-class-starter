/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AboutComponentComponent } from './about-component.component';

describe('Component: AboutComponent', () => {
  it('should create an instance', () => {
    let component = new AboutComponentComponent();
    expect(component).toBeTruthy();
  });
});
