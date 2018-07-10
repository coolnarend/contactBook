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
    // console.log('contact - - - - - ', contact);
    // console.log(this.http.post(this.url, JSON.stringify(contact)));
    return this.http.post(this.url, contact);
    // return this.http.post(this.url, JSON.stringify(contact));
  }

  edit(contact) {
    // return this.http.put(this.url + '/' + contact.id, JSON.stringify(contact));
    console.log(contact);
    console.log('okokokokokokokokok', contact.id);
    return this.http.put(this.url + '/' + contact.id, contact);
    // return this.http.put(`${this.url}/${contact.id}`, contact);
  }

  delete(contact) {
    return this.http.delete(this.url + '/' + contact.id);
  }


  // getContacts() {
  //   return this.http.get(this.url);
  // }

  // createContact(contact) {
  //   return this.http.post(this.url, JSON.stringify(contact));
  // }

  // updateContact(contact) {
  //   return this.http.put(this.url + '/' + contact.id, JSON.stringify(contact));
  // }

  // deleteContact(id) {
  //   return this.http.delete(this.url + '/' + id);
  // }
}
