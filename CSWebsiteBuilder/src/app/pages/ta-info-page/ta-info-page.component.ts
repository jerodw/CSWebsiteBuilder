import { Component, OnInit } from '@angular/core';
import { WebsiteConfig } from 'src/app/WebsiteConfig';
import { TAOffice } from 'src/app/models/TAOffice';
import { TA } from 'src/app/models/TA';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-ta-info-page',
  templateUrl: './ta-info-page.component.html',
  styleUrls: ['./ta-info-page.component.css']
})
export class TaInfoPageComponent implements OnInit {
  config: WebsiteConfig
  tableHours: number[]
  weekDays:WeekDay[] = [WeekDay.Monday, WeekDay.Tuesday,WeekDay.Wednesday, WeekDay.Thursday, WeekDay.Friday, WeekDay.Saturday]

  constructor() { }

  ngOnInit() {
    this.config = new WebsiteConfig()
    this.tableHours = [];

    var taOffice = this.config.taOffice;
    for (let i = taOffice.startHour; i <= taOffice.stopHour; i++){
      this.tableHours.push(i);
    }
  }

  getTimeString(hour:number) {
    if (hour < 12){
      return hour + ":00am";
    } else if (hour == 12){
      return "12:00pm";
    } else {
      return (hour - 12) + ":00pm";
    }
  }

  getTAImage(ta:TA): string{
    if (ta.imgRef == null){
      return "https://www.fkbga.com/wp-content/uploads/2018/07/person-icon-6.png";
    }
    return ta.imgRef
  }

  getTANames(weekDay:WeekDay, hour:number):string {
    var peopleWorking = this.getPeopleWorking(weekDay, hour);
    var names = "";
    for (let i = 0; i < peopleWorking.length; i++){
      names += peopleWorking[i].firstName;
      if (i < peopleWorking.length - 1){
        names += ", "
      }
    }
    return names
  }

  getPeopleWorking(weekDay:WeekDay, hour:number):TA[]{
    var peopleWorking = [];
    var courseTAs = this.config.courseTAs

    for (let i = 0; i < courseTAs.length; i++){
      if (courseTAs[i].isWorking(weekDay, hour)){
        peopleWorking.push(courseTAs[i])
      }
    }

    return peopleWorking
  }

  

}
