import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';

import {ContactsServiceService} from './contacts-service/contacts-service.service';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent],
  imports: [BrowserModule],
  providers:[ContactsServiceService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
