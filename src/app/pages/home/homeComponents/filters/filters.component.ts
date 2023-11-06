import { Component, EventEmitter, OnDestroy, OnInit, Output, } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['flowers', 'birthday', 'festivel'];
  categoriesSubscription: Subscription | undefined;
  storeService: any;

  constructor() {}

  ngOnInit(): void {

  }

  onShowCategory(category: string): void {
    this.showCategory.next(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
