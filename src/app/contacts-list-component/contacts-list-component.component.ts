import { Component, OnInit } from '@angular/core';
import {ContactsServiceService} from './../contacts-service/contacts-service.service';
import { Contact} from './../models/contact';
@Component({
  selector: 'trm-contacts-list-component',
  templateUrl: 'contacts-list-component.component.html',
  styleUrls: ['contacts-list-component.component.css']
})
export class ContactsListComponentComponent implements OnInit {

  contacts: Contact[];
  constructor(private contactService:ContactsServiceService){}

  ngOnInit(){
    this.contacts = this.contactService.getContacts();
  }

}
