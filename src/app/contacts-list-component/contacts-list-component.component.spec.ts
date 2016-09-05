/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ContactsListComponentComponent } from './contacts-list-component.component';

describe('Component: ContactsListComponent', () => {
  it('should create an instance', () => {
    let component = new ContactsListComponentComponent();
    expect(component).toBeTruthy();
  });
});
