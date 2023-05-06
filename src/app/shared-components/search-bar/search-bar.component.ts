import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() searchValue = new EventEmitter<string | null>();
  searchControl = new FormControl('');

  constructor(private readonly subscriptionService: SubscriptionService){}

  ngOnInit(): void {
    const subscription1 = this.searchControl.valueChanges
    .pipe(debounceTime(500))
    .subscribe({
      next: (value: string | null) => this.searchValue.emit(value)
    });
    this.subscriptionService.addSubscription(subscription1);
  }

  clearValue(): void {
    this.searchControl.reset();
  }

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeAll();
  }
}
