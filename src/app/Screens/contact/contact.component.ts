import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
declare var refreshPage: any;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ApiService } from 'src/app/api.service';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('callAPIDialog', {static:true}) customTemplate: TemplateRef<any>;
  subscribe: boolean = false;
  scheduleMeetingBody: any = {
    name: '',
    phonenNumber: '',
    email: '',
    dateTime: '',
    message: '',
    title: 'Meeting Scheduled'
  } 
  companyInfo: any = {};
  showScheduleModal: boolean = false;
  constructor(private dialog: MatDialog, private apiService: ApiService, private loaderService: LoaderService) { }

  ngOnInit() {
    console.log(this.customTemplate);
    this.getCompanyInfo();
    refreshPage();
  }

  openModal() {
    this.showScheduleModal = true;
    document.getElementById('scheduleModalButton').click();
  }
  closeModal() {
    this.dialog.closeAll();
    this.showScheduleModal = false;
  }

  getCompanyInfo() {
    this.apiService.getCompanyInfo().subscribe((res: any) => {
      this.companyInfo = res.data;
    })
  }

  scheduleMeetingPressed() {
    this.scheduleMeetingBody.title = "Meeting Scheduled"
    this.dialog.closeAll();
    this.loaderService.setLoaderState(true);
    this.apiService.sendEmail(this.scheduleMeetingBody).subscribe(emailRes => {
      this.scheduleMeeting();
    },
    err => {
      this.loaderService.setLoaderState(false);
    })
    
  }

  scheduleMeeting() {
    this.apiService.scheduleMeeting(this.scheduleMeetingBody).subscribe(res => {
      this.clearValues();
      this.loaderService.setLoaderState(false);
      this.subscribeUser();
    },
    err => {
      this.loaderService.setLoaderState(false);
    });
  }
  sendMessage() {
    this.scheduleMeetingBody.title = "Enquiry"
    this.loaderService.setLoaderState(true);
    this.apiService.sendEmail(this.scheduleMeetingBody).subscribe(emailRes => {
      this.subscribeUser();
      this.loaderService.setLoaderState(false);
      this.clearValues();
    });
  }

  isValid() {
    return this.scheduleMeetingBody.phoneNumber !=='' && this.scheduleMeetingBody.name !== '' && this.scheduleMeetingBody.email !== ''
  }

  clearValues() {
    this.scheduleMeetingBody = {
      name: '',
      phonenNumber: '',
      email: '',
      dateTime: '',
      message: '',
      title: 'Meeting Scheduled'
    } 
  }

  subscribeUser() {
    if(this.subscribe === true) {
      this.apiService.addSubscriber(this.scheduleMeetingBody).subscribe(res => {

      });
    }
    
  }

  openPage(page) {
      window.open(this.companyInfo[page]);
  }


  openPhone(page) {
    if(page === 'dialpad') {
      document.location.href = "tel:+"+this.companyInfo.phoneNumber;
    } else {
      window.location.href = "mailto:"+this.companyInfo.emailId+"?subject=Subject&body=message%20goes%20here";
    }
  }

}
