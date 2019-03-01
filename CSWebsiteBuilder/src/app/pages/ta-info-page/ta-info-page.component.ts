import { Component, OnInit } from '@angular/core';
import { WebsiteConfig } from 'src/app/WebsiteConfig';

@Component({
  selector: 'app-ta-info-page',
  templateUrl: './ta-info-page.component.html',
  styleUrls: ['./ta-info-page.component.css']
})
export class TaInfoPageComponent implements OnInit {
  config: WebsiteConfig
  tableHours: number[]

  constructor() { }

  ngOnInit() {
    this.config = new WebsiteConfig()
    
  }

}
