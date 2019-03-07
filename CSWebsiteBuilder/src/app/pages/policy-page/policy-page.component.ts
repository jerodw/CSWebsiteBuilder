import { Component, OnInit } from '@angular/core';
import { WebsiteConfig } from 'src/app/WebsiteConfig';

@Component({
  selector: 'app-policy-page',
  templateUrl: './policy-page.component.html',
  styleUrls: ['./policy-page.component.css']
})
export class PolicyPageComponent implements OnInit {

  config: WebsiteConfig

  constructor() {
    this.config = new WebsiteConfig();
   }

  ngOnInit() {
  }

}
