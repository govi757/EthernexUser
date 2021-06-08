import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var refreshPage: any;
declare var $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portFolioList: Array<any> = [];
  basicInfo: any = {};
  selectedItem: any = {};
  showPortfolioModal: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBasicInfo();
    this.getPortfolioList();
  }


  getBasicInfo() {
    // alert('je')
    this.apiService.getScreenBasicInfo('portfolio').subscribe((res: any) => {
      console.log(res);
      this.basicInfo = res.length!==0?res[0]:{};
      
    },
    err => {
      refreshPage();
    }
    );
  }


  getPortfolioList() {
    this.apiService.getCarouselDetails('portfolio').subscribe((res: any) => {
      console.log(res)
      this.portFolioList = res;
      refreshPage();
    },
    err => {
      refreshPage();
    })
  }

  openModal(item: any) {
   this.selectedItem = item;
   this.showPortfolioModal=true; 
  }
  closeModal() {
    this.showPortfolioModal=false; 
  }
}
