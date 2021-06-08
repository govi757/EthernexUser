import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  currentTab: any = 'mobile';
  constructor() { }

  ngOnInit() {
  }
  tabChange(type: any) {
    this.currentTab = type;
  }
}
