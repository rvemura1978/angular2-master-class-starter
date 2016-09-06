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


import { ContactDetailComponentComponent } from './contact-detail-component';
import { ContactEditorComponentComponent } from './contact-editor-component';
import { ContactsAppRoutes } from './app.routes';
import { ContactsDetailViewComponent } from './contacts-detail-view';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponentComponent, ContactDetailComponentComponent,
    ContactEditorComponentComponent,
    ContactsDetailViewComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes), HttpModule, FormsModule],
  providers:[ContactsServiceService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
