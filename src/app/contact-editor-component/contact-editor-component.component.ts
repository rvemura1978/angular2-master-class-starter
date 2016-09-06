import { Component, OnInit } from '@angular/core';
import {ContactsServiceService} from './../contacts-service/contacts-service.service';
import {Contact} from './../models/contact';
import {ActivatedRoute, Router  } from '@angular/router';
import {EventBusServiceService} from './../event-bus-service.service';

@Component({
  selector: 'trm-contact-editor-component',
  templateUrl: 'contact-editor-component.component.html',
  styleUrls: ['contact-editor-component.component.css']
})
export class ContactEditorComponentComponent implements OnInit {


  contact: Contact = <Contact>{ address: {}};

  constructor(private contactsServiceService:ContactsServiceService,private route: ActivatedRoute,
              private router:Router,private eventBusService:EventBusServiceService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsServiceService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.contact.address = contact.address;
        this.eventBusService.emit('appTitleChange',`Editing ${contact.name}`);
      });
  }

  save(contact){
    this.contactsServiceService.updateContact(contact)
      .subscribe(() => this.goToDetails(this.contact));

  }

  cancel(contact) {
  this.goToDetails(contact);
  }

  goToDetails(contact:Contact) {
    console.log(contact.id);
    this.router.navigate(['/contact',contact.id]);
  }
}
