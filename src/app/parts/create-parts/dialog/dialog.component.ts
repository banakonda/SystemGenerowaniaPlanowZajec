import { Component, OnInit, Input } from '@angular/core';
import { SubjectAPI, Subject} from '../../../data/models/Subject';
import { SubjectsService } from '../../../subjects/subjects.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() newSubject: Subject;
  newSubjectTeacher: any;
  subjects: SubjectAPI[];
  
  constructor(
    private subjectsService: SubjectsService,
  ) { 
    this.subjectsService.getSubjects().subscribe(
      subjects => this.subjects = subjects,
      () => { });
      console.log(this.subjects);
  }

  ngOnInit(): void {
  }
}
