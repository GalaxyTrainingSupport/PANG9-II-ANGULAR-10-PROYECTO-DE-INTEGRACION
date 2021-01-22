import { Component, OnInit } from '@angular/core';
import { GlxSession, GlxTheme } from '@galaxy/commons/services';
import { TranslateService } from '@ngx-translate/core';
import { dayJs } from '@galaxy/commons/utils';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(
    public themeService: GlxTheme,
    public session: GlxSession,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  setLanguage(lang: 'es' | 'en') {
    this.translate.use(lang);
    dayJs.locale(lang);
  }

}
