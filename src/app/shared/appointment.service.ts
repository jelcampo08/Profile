import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  contactListRef: AngularFireList<any>;
  contactRef: AngularFireObject<any>;
  aptService: any;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createContact(apt: Appointment) {
    return this.contactListRef.push({
      name: apt.name,
      mobile: apt.mobile
    })
  }

  // Get Single
  getContact(id: string) {
    this.contactRef = this.db.object('/appointment/' + id);
    return this.contactRef;
  }

  // Get List
  getContactList() {
    this.contactListRef = this.db.list('/appointment');
    return this.contactListRef;
  }

  // Delete
  deleteContact(id: string) {
    this.contactRef = this.db.object('/appointment/' + id);
    this.contactRef.remove();
  }
}