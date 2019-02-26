import { Component } from '@angular/core';
import { WebsiteConfig } from "./models/WebsiteConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSWebsiteBuilder';
  config: WebsiteConfig;

  constructor(){
    this.config = new WebsiteConfig();
  }

}
