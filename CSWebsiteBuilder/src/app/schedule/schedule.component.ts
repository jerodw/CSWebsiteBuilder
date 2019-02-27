import { Component, OnInit } from '@angular/core';
import { WebsiteConfig } from '../models/WebsiteConfig';
import { Resource } from '../models/Resource';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  config:WebsiteConfig

  constructor() { }

  ngOnInit() {
    this.config = new WebsiteConfig();
  }

  isDownloadable(resource:Resource): boolean{
    if (resource.avaliableDate < new Date()){
      return true;
    }
    return false;
  }
}
