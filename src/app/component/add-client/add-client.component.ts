import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client";
import {DataService} from "../../shared/data.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
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
  }
  resetForm(){
    this.id = '';
    this.full_name ='';
    this.gender ='';
    this.cin ='';
    this.phone ='';
    this.mutuelle='';
    this.age='';
    this.type='';
  }
  addClient(){
    if  (this.full_name==''|| this.gender=='' || this.cin=='' || this.phone==''|| this.type==''|| this.mutuelle==''|| this.age==''){
      alert('Fill all input fields');
      console.log(this.full_name+this.gender + this.cin + this.phone + this.type + this.mutuelle + this.age)
    }else{
    this.clientObj.id='';
    this.clientObj.full_name=this.full_name;
    this.clientObj.gender=this.gender;
    this.clientObj.phone=this.phone;
    this.clientObj.cin=this.cin;
    this.clientObj.age=this.age;
    this.clientObj.mutuelle=this.mutuelle;
    this.clientObj.type=this.type;
    this.data.addClient(this.clientObj);
    alert('Operation done Successfully !');
    this.resetForm();
    }
  }
}
