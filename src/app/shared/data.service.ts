import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Client} from "../model/client";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  //add
  addClient(client: Client){
    client.id=this.afs.createId();
    return this.afs.collection('/Clients').add(client);
  }

  //getAll
  getAllClients(){
    return this.afs.collection('/Clients').snapshotChanges();
  }

  //delete
  deleteClient(client:Client){
    return this.afs.doc('/Clients/'+client.id).delete();
  }

  //update
  updateClient(client: Client){
    this.deleteClient(client);
    this.addClient(client);
  }
}
