import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';

import {ContactsServiceService} from './contacts-service/contacts-service.service';
import { ContactsListComponentComponent } from './contacts-list-component/contacts-list-component.component';


import {RouterModule } from '@angular/router';

import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

import {FormsModule} from '@angular/forms';


import { ContactDetailComponentComponent } from './contact-detail-component/contact-detail-component.component';
import { ContactEditorComponentComponent } from './contact-editor-component/contact-editor-component.component';
import { ContactsAppRoutes } from './app.routes';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponentComponent, ContactDetailComponentComponent,
    ContactEditorComponentComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes), HttpModule, FormsModule],
  providers:[ContactsServiceService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
