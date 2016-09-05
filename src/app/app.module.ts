import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';

import {ContactsServiceService} from './contacts-service/contacts-service.service';
import { ContactsListComponentComponent } from './contacts-list-component/contacts-list-component.component';


import {RouterModule } from '@angular/router';





import { ContactsAppRoutes } from './app.routes';

import { ContactDetailComponentComponent } from './contact-detail-component/contact-detail-component.component';


@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponentComponent, ContactDetailComponentComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes)],
  providers:[ContactsServiceService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
