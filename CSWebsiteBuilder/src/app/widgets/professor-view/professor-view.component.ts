import { Component, OnInit, Input } from '@angular/core';
import { Professor } from 'src/app/models/Professor';

@Component({
  selector: 'app-professor-view',
  templateUrl: './professor-view.component.html',
  styleUrls: ['./professor-view.component.css']
})
export class ProfessorViewComponent implements OnInit {

  @Input() professor: Professor

  constructor() { }

  ngOnInit() {
  }

  getImage(professor: Professor){
    if (professor.imgRef == null){
      return "";
    }
    return professor.imgRef;
  }

}
