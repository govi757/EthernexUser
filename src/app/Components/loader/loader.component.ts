import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  showLoader: any = false;
  constructor(private loaderService: LoaderService,private cdRef : ChangeDetectorRef) { }

  ngOnInit() {
    this.loaderService.getLoaderState().subscribe(res => {
      console.log(res,"State");
      this.showLoader = res;
      // this.cdRef.detectChanges();
    });
  }

}
