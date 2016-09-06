import { Component, OnInit } from '@angular/core';
import {ContactsServiceService} from './../contacts-service/contacts-service.service';
import { Contact} from './../models/contact';


import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import {Subject} from 'rxjs/Subject';
@Component({
  selector: 'trm-contacts-list-component',
  templateUrl: 'contacts-list-component.component.html',
  styleUrls: ['contacts-list-component.component.css']
})
export class ContactsListComponentComponent implements OnInit {

  contacts:Observable<Array<Contact>>;
  constructor(private contactService:ContactsServiceService){}
  private terms$ = new Subject<string>();

  ngOnInit(){
    this.contacts = this.contactService.getContacts();


    this.terms$.debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));
  }

  search(term: string){

    console.log("SEARCH call - " +  term);
    this.contacts = this.contactService.search(term);

  }

  /*

  search(term: string){

    this.contactService.search(term)
      .subscribe(contacts => this.contacts = contacts);
  }
*/
}
