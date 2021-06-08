import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var refreshPage: any;
declare var handleAccordion: any;
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [
    trigger('faqAnim', [
      state('open', style({
        minHeight: '100px',
        opacity:1,
        display:'block'
        // width:'100%',
      })),
      state('closed', style({
        height: '0px',
        display:'none'
        // width:'0px',
      })),
      transition('open => closed', [
        animate('.8s'),
        
      ]),
      transition('closed => open', [
        animate('0.8s')
      ]),
    ])
  ]
})
export class FaqComponent implements OnInit {
  basicInfo: any = {};
  gettingStartedFaqs: any = [];
  pricingPlansFaqs: any = [];
  salesQuestionsFaqs: any = [];
  userGuideFaqs: any = [];
  selectedAccordion: any = 0;
  companyInfo: any = {}
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBasicInfo();
    this.getFaqList();
    this.getCompanyInfo();
  }


  getCompanyInfo() {
    this.apiService.getCompanyInfo().subscribe((res: any) => {
      this.companyInfo = res.data;
    })
  }

  getBasicInfo() {
    // alert('je')
    this.apiService.getScreenBasicInfo('faq').subscribe((res: any) => {
      console.log(res);
      this.basicInfo = res.length!==0?res[0]:{};
      
    },
    err => {
  
    }
    );
  }

  getFaqList() {
    this.apiService.getFAQDetails().subscribe((res: any) => {
      this.selectedAccordion = res.length>0?res[0]._id:'';
      res.map(item => {
        
        if(item.type === 'GettingStarted') {
          this.gettingStartedFaqs.push(item);
        }
        if(item.type === 'PricingPlans') {
          this.pricingPlansFaqs.push(item);
        }
        if(item.type === 'SalesQuestions') {
          this.salesQuestionsFaqs.push(item);
        }
        if(item.type === 'UsageGuides') {
          this.userGuideFaqs.push(item);
        }
        
        
        console.log(item);
      });
      refreshPage();
      
    },
    err => {

    })
  }

  accordionClicked(item: any) {
    this.selectedAccordion = item._id;  
    setTimeout(() => {
      
    }, 500);
    
  }

  openPage(page) {
    if(page === 'dialpad') {
      document.location.href = "tel:+"+this.companyInfo.phoneNumber;
    } else {
      window.location.href = "mailto:"+this.companyInfo.emailId+"?subject=Subject&body=message%20goes%20here";
    }
  }
}
