import { Pipe, PipeTransform } from '@angular/core';
import { TitleAPI } from './models/Title';
import { TitleService } from './title.service';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {
  titles: TitleAPI[];
  constructor(
    private titleService: TitleService,
  ) {
    this.titleService.getTitles().subscribe(t => this.titles = t);
  }
  transform(value: string): string {
    return this.titles.find(q => q.id === value).name;
  }

}
