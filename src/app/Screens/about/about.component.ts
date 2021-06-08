import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var refreshPage: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  basicInfo: any = {};
  ourMissionImage: any;
  ourVissionImage: any;
  bannerImage: any;
  teamMembersList: Array<any> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBasicInfo();
    this.getBasicImages();
    this.getTeamMemberList();
  }

  getBasicInfo() {
    // alert('je')
    this.apiService.getScreenBasicInfo('overview').subscribe((res: any) => {
      console.log(res);
      this.basicInfo = res.length!==0?res[0]:{};
      console.log(this.basicInfo, "this.basicInfo")
      //refreshPage();
    },
    err => {
      //refreshPage();
    }
    );
  }

  getBasicImages() {
    // alert('je')
    this.apiService.getCarouselDetails('overview').subscribe((res: any) => {
      res.map(item => {
        if(item.type === 'OurMission') {
          this.ourMissionImage = item.imageUrl;
        }
        if(item.type === 'OurVision') {
          this.ourVissionImage = item.imageUrl;
        }
        if(item.type === 'Banner') {
          this.bannerImage = item.imageUrl;
        }
      })
      console.log(res);
      //refreshPage();
      // this.basicInfo = res.length!==0?res[0]:{};
    },
    err => {
      //refreshPage();
    }
    );
  }

  getTeamMemberList() {
    this.apiService.getTeamMemberList().subscribe((res: any) => {
      this.teamMembersList = res;
    })
  }

}
