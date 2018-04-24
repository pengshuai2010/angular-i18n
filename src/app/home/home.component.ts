import {Component, OnInit} from '@angular/core';
import {I18n} from '@ngx-translate/i18n-polyfill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruites = ['apple', 'orange', 'pear', 'peach', 'grape', 'banana', 'pineapple'];
  greeting = this.i18n({id: 'customId', value: 'hello {{guest}}', description: 'Custom desc', meaning: 'Custom meaning'},
    {guest: 'world'});

  constructor(private i18n: I18n) {
  }

  ngOnInit() {
  }

}
