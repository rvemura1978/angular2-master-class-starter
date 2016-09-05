import { Component } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { Contact} from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ ContactsHeaderComponent]
})
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works!';
  contacts: Contact[] = CONTACT_DATA;
  contact: Contact = {
    id: 7,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/6.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  };
}
