import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';

import {ContactsServiceService} from './contacts-service/contacts-service.service';
import { ContactsListComponentComponent } from './contacts-list-component/contacts-list-component.component';


import {RouterModule } from '@angular/router';

import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


import {FormsModule} from '@angular/forms';


import { ContactDetailComponentComponent } from './contact-detail-component';
import { ContactEditorComponentComponent } from './contact-editor-component';
import { ContactsAppRoutes } from './app.routes';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import {EventBusServiceService} from './event-bus-service.service';
import { ContactsDashboardComponentComponent } from './contacts-dashboard-component/contacts-dashboard-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponentComponent, ContactDetailComponentComponent,
    ContactEditorComponentComponent,
    ContactsDetailViewComponent,
    ContactsDashboardComponentComponent,
    AboutComponentComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes), HttpModule, FormsModule],
  providers:[ContactsServiceService,EventBusServiceService,
    {
      provide: 'ConfirmNavigationGuard',
      useValue: () => window.confirm('Navigate away without saving?')
    }],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
