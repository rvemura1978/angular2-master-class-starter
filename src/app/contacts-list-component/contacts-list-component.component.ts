import { Component, OnInit } from '@angular/core';
import {ContactsServiceService} from './../contacts-service/contacts-service.service';
import { Contact} from './../models/contact';


import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'trm-contacts-list-component',
  templateUrl: 'contacts-list-component.component.html',
  styleUrls: ['contacts-list-component.component.css']
})
export class ContactsListComponentComponent implements OnInit {

  contacts:Array<Contact>;
  constructor(private contactService:ContactsServiceService){}

  ngOnInit(){
     this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

}
