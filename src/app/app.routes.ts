/**
 * Created by Radhika Vemura on 05/09/2016.
 */
import {ContactsDashboardComponentComponent} from './contacts-dashboard-component/contacts-dashboard-component.component';
import {ContactsDetailViewComponent} from './contacts-detail-view/contacts-detail-view.component';
import {AboutComponentComponent} from './about-component/about-component.component';
import {ContactDetailComponentComponent} from './contact-detail-component/contact-detail-component.component';
import {ContactEditorComponentComponent} from './contact-editor-component/contact-editor-component.component';


export const ContactsAppRoutes = [
  { path: '', component: ContactsDashboardComponentComponent,
    children: [
      { path: '', redirectTo: 'contact/0' },

      { path: 'contact/:id', component: ContactsDetailViewComponent },
      { path: 'contact/:id/edit', component: ContactEditorComponentComponent }
    ]
  },
  { path: 'about', component: AboutComponentComponent },
  { path: 'contact/:id', component: ContactsDetailViewComponent },
  { path: 'contact/:id/edit', component: ContactEditorComponentComponent }

];
