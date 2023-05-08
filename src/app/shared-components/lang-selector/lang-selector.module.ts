import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangSelectorComponent } from './lang-selector.component';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    LangSelectorComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    LangSelectorComponent
  ]
})
export class LangSelectorModule { }
