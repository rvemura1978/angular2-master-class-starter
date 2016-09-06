import { Component, OnInit } from '@angular/core';
import {ContactsServiceService} from './../contacts-service/contacts-service.service';
import { Contact} from './../models/contact';


import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/merge';


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

   this.contacts = this.terms$.debounceTime(400)
      .distinctUntilChanged() //Observable<string>
      .switchMap(term => this.contactService.search(term)) //observable<contact[]>
     .merge(this.contactService.getContacts());

    //onload
    //swicthMap not fired on load, only when user types, hence merge returns data
    // but when userTypes - only switchMap fired

    //flatMap , p,pa => requests out of order
  }



  /*

  search(term: string){

    this.contactService.search(term)
      .subscribe(contacts => this.contacts = contacts);
  }
*/
}
