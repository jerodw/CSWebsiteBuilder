import { Component, OnInit, Input } from '@angular/core';
import { WebsiteConfig } from '../models/WebsiteConfig';
import { NavigationLink } from '../models/NavigationLink';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input() config:WebsiteConfig
  selectedLink: NavigationLink

  constructor() { }

  ngOnInit() {
  }

  selectLink(navigationLink:NavigationLink){
    this.selectedLink = navigationLink;
  }

}
