import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {
    login: "",
    password: "",
  }
  logged = true;
  title: string = 'system-generowania-planow-zajec';
  test() {
    this.logged = true;
  }
}
