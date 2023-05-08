import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private readonly snackBar: MatSnackBar,
    private readonly translate: TranslateService) { }

    show(message: string){
      this.translate.get(message).subscribe({
        next: (mssg) => {
          this.snackBar.open(mssg, 'Close', {
            duration: 3000
          });
        }
      });
    }
}
