import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './../data/contact-data';
import {Http} from '@angular/http';

import {Contact} from './../models/contact';
import {Observable} from "rxjs";

@Injectable()
export class ContactsServiceService {

  contacts:Contact[] = CONTACT_DATA;
  private API_ENDPOINT:string = "http://localhost:4201/api";

  constructor(private http:Http) { }


  getContact(id: any):Observable<Contact> {
    return this.http.get(`${this.API_ENDPOINT}/contact/${id}`)
      .map(res => res.json());

  }


  getContacts():Observable<Array<Contact>> {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }
}
