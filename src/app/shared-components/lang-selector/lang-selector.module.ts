import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangSelectorComponent } from './lang-selector.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    LangSelectorComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    LangSelectorComponent
  ]
})
export class LangSelectorModule { }
