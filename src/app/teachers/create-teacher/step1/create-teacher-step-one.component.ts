import { Component, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroup, NgForm } from '@angular/forms';
import { Teacher } from 'src/app/data/models/Teacher';
import { TitleAPI } from 'src/app/data/models/Title';
import { TitleService } from 'src/app/data/title.service';

@Component({
  selector: 'app-create-teacher-step-one',
  templateUrl: './create-teacher-step-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateTeacherStepOneComponent implements OnInit {
  @Input() newTeacher: Teacher;
  titles: TitleAPI[] = [];

  constructor(
    private titleService: TitleService,
  ) { }

  ngOnInit(): void {
    this.titleService.getTitles().subscribe(t => this.titles = t);
  }

}
