import { Component, OnInit } from '@angular/core';
import { RxTranslation, translate } from '@rxweb/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-essentials-project';
  defaultLang: any;
  languagesAvailable = {
    en: 'English',
    fr: 'French',
  };
  @translate() global: any;

  constructor(private rxTranslation: RxTranslation) {}

  ngOnInit(): void {
    if (navigator.languages) {
      this.defaultLang = (this.languagesAvailable as any)[
        navigator.languages[0]
      ];
      // this.rxTranslation.change(navigator.languages[0]);
    } else {
      this.defaultLang = this.languagesAvailable['en'];
      // this.rxTranslation.change('en');
    }
  }

  changeAppLanguage(language: any) {
    this.defaultLang = (this.languagesAvailable as any)[language];
    this.rxTranslation.change(language);
  }
}
