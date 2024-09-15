import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client";
import {DataService} from "../../shared/data.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
clientsList:Client[]=[];
clientObj:Client={cin: "", gender: "", id: "", full_name: "",age:"", phone: "",mutuelle:"",type:""};
id: string = '';
full_name: string='';
age:string='';
gender: string='';
cin: string='';
phone: string='';
type: string='';
mutuelle:string='';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(){
    this.data.getAllClients().subscribe(res =>{
      this.clientsList=res.map((e:any)=>{
        const data=e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data;

      })
  
    },err=>{
      alert('error while fetching student data');
    })
  }
  addClient(){
    if (this.full_name==''|| this.gender=='' || this.cin=='' || this.phone==''|| this.type==''|| this.mutuelle==''|| this.age==''){
      alert('Fill all input fields');
    }
  }
  updateClient(){

  }
  deleteClient(c:Client){
    if(window.confirm('Are you sure you want to delete'+c.full_name+'?')) {
    this.data.deleteClient(c);}
  }
}
