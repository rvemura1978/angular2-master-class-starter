import { Component, OnInit } from '@angular/core';
import {ContactsServiceService} from './../contacts-service/contacts-service.service';
import {Contact} from './../models/contact';
import {ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'trm-contact-editor-component',
  templateUrl: 'contact-editor-component.component.html',
  styleUrls: ['contact-editor-component.component.css']
})
export class ContactEditorComponentComponent implements OnInit {


  contact: Contact = <Contact>{ address: {}};

  constructor(private contactsServiceService:ContactsServiceService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsServiceService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.contact.address = contact.address;
      });
  }

  save(contact){
    this.contactsServiceService.updateContact(contact);
  }

  cancel(contact) {
  this.goToDetails(contact);
  }

  goToDetails(contact:Contact) {
    this.router.navigate(['/contact'],contact.id);
  }
}
