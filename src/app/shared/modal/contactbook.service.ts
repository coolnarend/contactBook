import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactBookService {
  private url = 'http://localhost:3004/contacts';
  constructor(
    private http: Http
  ) { }

  getContacts() {
    return this.http.get(this.url);
  }

  create(contact) {
    return this.http.post(this.url, contact);
  }

  edit(contact) {
    return this.http.put(this.url + '/' + contact.id, contact);
  }

  delete(contact) {
    return this.http.delete(this.url + '/' + contact.id);
  }
}
