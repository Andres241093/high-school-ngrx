import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDeleteComponent } from './course-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { AlertService } from 'src/app/services/alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    CourseDeleteComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule,
    MatSnackBarModule
  ],
  providers: [AlertService]
})
export class CourseDeleteModule { }
