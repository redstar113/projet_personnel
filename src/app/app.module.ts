import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { ClientsComponent } from './component/clients/clients.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { NewappointementComponent } from './component/newappointement/newappointement.component';
import { AppointementsComponent } from './component/appointements/appointements.component';
import { HttpClientModule } from '@angular/common/http'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {IgxTimePickerModule,IgxInputGroupModule,IgxIconModule} from 'igniteui-angular'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {HammerModule} from "@angular/platform-browser"
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker"

@NgModule({
  declarations: [
    AppComponent,LoginComponent, HeaderComponent, SideNavComponent, MainComponent,DashboardComponent, FooterComponent, ClientsComponent, AddClientComponent, NewappointementComponent, AppointementsComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DropDownListModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxTimePickerModule,
    BrowserAnimationsModule,
    HammerModule,
    NgxMaterialTimepickerModule,
    RouterModule.forRoot([
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'main',component:MainComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'clients',component:ClientsComponent},
    {path:'appoin',component:AppointementsComponent},
    {path:'newappoin',component:NewappointementComponent},
    {path:'addclient',component:AddClientComponent}],)
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
