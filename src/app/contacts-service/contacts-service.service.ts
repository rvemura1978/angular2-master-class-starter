import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './../data/contact-data';
import {Http} from '@angular/http';

import {Contact} from './../models/contact';
import {Observable} from "rxjs";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/merge';

@Injectable()
export class ContactsServiceService {

  contacts:Contact[] = CONTACT_DATA;
  private API_ENDPOINT:string = "http://localhost:4201/api";

  constructor(private http:Http) { }


  getContact(id: any):Observable<Contact> {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
      .map(res => res.json().item);


  }

  rawSearch( terms: Observable<string>, debounceMs = 400):Observable<Array<Contact>> {
    return terms.debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(term => this.search(term)); //observable<contact[]>

  }


  search(term: string):Observable<Array<Contact>> {
    return this.http.get(`${this.API_ENDPOINT}/search?text=${term}`)
        .map((res) => {
          return res.json().items
        });


  }

  /*
  search(term: string) {
    return this.http.get(`${this.API_ENDPOINT}/search?text=${term}`)
      .map(res => res.json().items);
  }
  */

  updateContact(contact: Contact) {
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`,contact);
  }

  getContacts():Observable<Array<Contact>> {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }
}
