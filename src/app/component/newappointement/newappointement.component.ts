import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import {DataService} from "../../shared/data.service";
import { PickerInteractionMode } from 'igniteui-angular';

@Component({
  selector: 'app-newappointement',
  templateUrl: './newappointement.component.html',
  styleUrls: ['./newappointement.component.css']
})
export class NewappointementComponent implements OnInit {
  public mode:PickerInteractionMode=PickerInteractionMode.DropDown;
  public format = 'hh:mm tt';
  public date: Date= new Date();
clientsList:Client[]=[];

appointObject:any= {
  "client":"",
  "appointmentDate":"",
  "appointmentTimeStart":"",
  "appointmentTimeEnd":"",
  "duration":"",
  "description":""
  }

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllClients();
    console.log(this.clientsList)
  }



getAllClients(){
  this.data.getAllClients().subscribe(res =>{
    this.clientsList=res.map((e:any)=>{
      const data=e.payload.doc.data();
      data.id=e.payload.doc.id;
      return data;

    }
    
  )
  console.log(this.clientsList)
  },err=>{
    alert('error while fetching student data');
  })
}

}
