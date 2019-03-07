import { Component, OnInit } from '@angular/core';
import { WebsiteConfig } from 'src/app/WebsiteConfig';
import { Professor } from 'src/app/models/Professor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  config: WebsiteConfig;

  constructor() { 
    this.config = new WebsiteConfig();
  }

  ngOnInit() {
  }
}
