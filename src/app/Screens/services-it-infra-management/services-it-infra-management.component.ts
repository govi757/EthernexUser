import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var refreshPage: any;
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-services-it-infra-management',
  templateUrl: './services-it-infra-management.component.html',
  styleUrls: ['./services-it-infra-management.component.css'],
  animations: [
    trigger('serviceAnim', [
      state('open', style({
        // height: '400px',
        opacity:1,
        // width:'100%',
        transform: 'scale(1)'
      })),
      state('closed', style({
        // height: '0px',
        opacity: 0,
        // width:'0px',
        transform: 'scale(0)'
      })),
      transition('open => closed', [
        animate('.2s'),
        
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class ServicesItInfraManagementComponent implements OnInit {
  basicInfo : any = {};
  servicesList = [];
  servicesListShown = [];
  activeTab: any = 'securitySurvilance';
  bannerImage: any;
  itInfraServicesImage: any;
  isOpen: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBasicInfo();
    this.getServicesList();
    this.getCarouselList();
  }
  developmentServiceList: any = ['Web', 'Mobile', 'Custom', 'ECommerce'];

  getBasicInfo() {
    // alert('je')
    this.apiService.getScreenBasicInfo('itInfraStructureService').subscribe((res: any) => {
      console.log(res);
      this.basicInfo = res.length!==0?res[0]:{};
      console.log(this.basicInfo)
      refreshPage();
    },
    err => {
  
    }
    );
  }

  getServicesList() {
    this.apiService.getServiceDetails('ItInfraManagement').subscribe((res: any) => {
      this.servicesList = res;
      this.changeTab('securitySurvilance')

    })
  }

  getCarouselList() {
    this.apiService.getCarouselDetails('itInfraManagementService').subscribe((res: any) => {
      console.log(res);
      res.map(item => {
        console.log(item)
        if(item.type === 'Banner') {
          this.bannerImage = item.imageUrl;
        }
        if(item.type === 'ItInfraManagementService') {
          this.itInfraServicesImage = item.imageUrl;
        }
        
      })
    },
    err => {

    }
    )
  }

  changeTab(screen: any) {
    this.isOpen = false;
    
    setTimeout(() => {
      
    this.servicesListShown = this.servicesList.filter(itm => {
      return itm.subType === screen
    });
      this.isOpen = true;
      this.activeTab = screen;  
    }, 200);
  }

}
