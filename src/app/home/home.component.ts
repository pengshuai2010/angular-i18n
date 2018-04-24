import {Component, OnInit} from '@angular/core';
import {I18n} from '@ngx-translate/i18n-polyfill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruits: string[];
  greeting = this.i18n({id: 'customId', value: 'hello {{guest}}', description: 'Custom desc', meaning: 'Custom meaning'},
    {guest: 'world'});

  constructor(private i18n: I18n) {
    this.fruits = [this.i18n('apple'), this.i18n('orange'), this.i18n('pear'), this.i18n('peach'), this.i18n('grape')
      , this.i18n('banana'), this.i18n('pineapple')];
  }

  ngOnInit() {
  }

}
