import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router, private apiService: ApiService, private loaderService: LoaderService) { }
  showMobileOptions: boolean = false;
  showMobileServices: boolean = false;
  serviceList: any = [];
  emailBody: any = {
    email: '',
    service: '',
    phoneNumber: '',
    name: ''
  }
  ngOnInit() {
    this.getServiceList();
  }
  navigationClicked(link) {
    this.showMobileOptions = false;
    this._router.navigate([link]).then(res => {
      document.body.scrollTop = 0;
      // window.location.reload();
      
    });
  }

  sendEmail() {
    this.loaderService.setLoaderState(true);
    this.apiService.sendEmail(this.emailBody).subscribe(res => {
      window.location.reload();
      this.loaderService.setLoaderState(false);
    },
    err => {
      window.location.reload();
      this.loaderService.setLoaderState(false);
    })
  }

  getServiceList() {
    this.apiService.getServiceDetails('Basic').subscribe(res => {
      console.log(res);
      this.serviceList = res;
    },
    err => {
    }
    )
  }
  openMenu() {
    this.showMobileOptions = !this.showMobileOptions
  }
}
