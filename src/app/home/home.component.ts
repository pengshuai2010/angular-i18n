import {Component, OnInit} from '@angular/core';
import {I18n} from '@ngx-translate/i18n-polyfill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruites = ['apple', 'orange', 'pear', 'peach', 'grape', 'banana', 'pineapple'];

  constructor(private i18n: I18n) {
    console.log(this.i18n('This is a test {{myVar}} !', {myVar: '^_^'}));
    console.log(this.i18n('This is a test {{ok}} !', {ok: '\\o/'}));
  }

  ngOnInit() {
  }

}
