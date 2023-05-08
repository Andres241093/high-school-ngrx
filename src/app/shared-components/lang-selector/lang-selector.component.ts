import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent {
  title = 'English'

  constructor(private readonly translateService: TranslateService){}

  changeLang(lang: string) {
    this.translateService.use(lang);
    this.title = lang === 'en' ? 'English' : 'Español';
  }
}
