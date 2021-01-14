import { Component } from '@angular/core';
import { AuthService } from './data/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {
    username: "",
    password: "",
  }
  logged = true;
  error = false;
  title: string = 'system-generowania-planow-zajec';

  constructor(private auth: AuthService) { }
  login() {

    this.auth.getAuth(this.user).subscribe(q => {
      if (q)
        this.logged = true;
    },
      () => { this.error = true; },
      () => { },
    )
  }
}
