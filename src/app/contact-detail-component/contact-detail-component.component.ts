import { Component, OnInit } from '@angular/core';
import {ContactsServiceService} from './../contacts-service/contacts-service.service';
import {ActivatedRoute  } from '@angular/router';
import {Contact} from './../models/contact';
@Component({
  selector: 'trm-contact-detail-component',
  templateUrl: 'contact-detail-component.component.html',
  styleUrls: ['contact-detail-component.component.css']
})
export class ContactDetailComponentComponent implements OnInit {


contact:Contact;




  constructor(private route: ActivatedRoute, private contactsService: ContactsServiceService) {

  }
ngOnInit() {
  let id = this.route.snapshot.params['id'];
  this.contact = this.contactsService.getContact(id);
}

}
