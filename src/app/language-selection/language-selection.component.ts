import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css']
})
export class LanguageSelectionComponent implements OnInit {
  languages = [
    {code: 'en', label: 'English'},
    {code: 'zh-cn', label: '简体中文'},
    {code: 'zh-tw', label: '繁體中文'}
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string,
              public location: Location) {
  }

  ngOnInit() {
  }

}
