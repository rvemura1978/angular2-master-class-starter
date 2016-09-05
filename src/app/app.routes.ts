/**
 * Created by Radhika Vemura on 05/09/2016.
 */
import {ContactsListComponentComponent} from './contacts-list-component/contacts-list-component.component';
import {ContactDetailComponentComponent} from './contact-detail-component/contact-detail-component.component';

export const ContactsAppRoutes = [
  { path: '', component: ContactsListComponentComponent },
  { path: 'contact/:id', component: ContactDetailComponentComponent },
];
