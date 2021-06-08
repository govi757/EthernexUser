import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ScriptService } from 'src/app/services/script.service';

// import { initTowhub, initparallax } from '../../../assets/js/script-listings'; 
declare var refreshPage: any;

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  testArr = [1,2,3,4];
  serviceList: Array<any>=[];
  carouselList: Array<any> = [];
  industriesList: any = [];
  basicInfo: any = {};
  bannerImage: any = '';
  constructor(private apiService: ApiService,
    private loaderService: LoaderService,
    private _router: Router,
    private script: ScriptService
    ) { }

  ngOnInit() {
    this.getCarouselList();
  }
ngAfterViewInit() {
  this.getServiceList();
  this.getBasicInfo();
}
getBasicInfo() {
  this.loaderService.setLoaderState(true);
  this.apiService.getScreenBasicInfo('home').subscribe((res: any) => {
    console.log(res);
    this.loaderService.setLoaderState(false);
    this.basicInfo = res.length!==0?res[0]:{};
    // refreshPage();
  },
  err => {
    this.loaderService.setLoaderState(false);
    // refreshPage();
  }
  );
}

public loadScript() {   
  // setTimeout(() => {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("script-listings")) {
            isFound = true;
        }
    }
  
    if (!isFound) {
        var dynamicScripts = [ "./assets/js/plugins.js", "./assets/js/script-listings.js", "./assets/js/scripts.js",];
  
        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            // node.async = true;
            node.charset = 'utf-8';
            console.log(node, "Node");
            document.getElementsByTagName('head')[0].appendChild(node);
        }
  
    }  
  // }, 1000);     
  
}

  getServiceList() {
    this.loaderService.setLoaderState(true);
    this.apiService.getServiceDetails('Basic').subscribe((res: any) => {
      console.log(res);
      this.serviceList = res;
      this.loaderService.setLoaderState(false);
      refreshPage()
    },
    err => {
      refreshPage()
    }
    )
  }
  getCarouselList() {
    this.apiService.getCarouselDetails('home').subscribe(res => {
      console.log(res);
      this.filterCarouselList(res);
      this.filterIndustriesList(res);
      this.filterBannerImage(res);
      refreshPage();
      // this.loadScript();
    //   this.script.load('jquery','lightbox','plugin', 'script1', 'script2').then(data => {
    //     console.log('script loaded ', data);
    // }).catch(error => console.log(error));
    },
    err => {
      this.loadScript()
    }
    )
  }
  filterCarouselList(res) {
    this.carouselList = res.filter(itm => {
      return itm.type === 'carousel'
    });
  }
  filterBannerImage(res) {
    res.map(item => {
      if(item.type === 'Banner') {
        this.bannerImage = item.imageUrl;
      }
    })
  }
  filterIndustriesList(res) {
    this.industriesList = res.filter(itm => {
      return itm.type === 'industries'
    });
  }
  openService(service: any) {
    console.log(service)
    var camelCased = service.subType.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    this._router.navigate(['ethernex/'+camelCased]).then(res => {
      document.body.scrollTop = 0;
      // window.location.reload();
      
    });
  }
  openPage(page) {
    this._router.navigate(['ethernex/'+page]).then(res => {
      document.body.scrollTop = 0;
    });
  }
}
