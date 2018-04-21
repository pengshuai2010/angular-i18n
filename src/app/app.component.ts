import {Component, Inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  minutes = 0;
  gender = 'f';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  heroes: string[] = ['Magneta', 'Celeritas', 'Dynama'];

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }

  male() {
    this.gender = 'm';
  }

  female() {
    this.gender = 'f';
  }

  other() {
    this.gender = 'o';
  }
}

