import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subscriberBody: any = {
    email: '',
    phoneNumber:'',
    name:'',
    role:'subscriber'
  }
  constructor(private apiService: ApiService,
    private loaderService: LoaderService,
    private _router: Router,
    ) { }

  ngOnInit() {
  }

  addSubscriber() {
    this.loaderService.setLoaderState(true);
    this.apiService.addSubscriber(this.subscriberBody).subscribe(res => {
      this.loaderService.setLoaderState(false);
      this.subscriberBody = {
        email: '',
        phoneNumber:'',
        name:'',
        role:'subscriber'
      }
    },
    err => {
      this.loaderService.setLoaderState(false);
    })
  }

  navigationClicked(link) {
    this._router.navigate([link]).then(res => {
      document.body.scrollTop = 0;
      // window.location.reload();
      
    });
  }


}
