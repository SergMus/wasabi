import { Injectable, OnDestroy } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { SliderData } from '../interfaces/slider';

@Injectable({
  providedIn: 'root',
})
export class EventBusService implements OnDestroy {
  private subject$: Subject<SliderData> = new Subject<SliderData>();

  public emit(event: SliderData): void {
    this.subject$.next(event);
  }

  public on(eventName: string, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: SliderData) => e.name === eventName),
        map((e: SliderData) => e['data'])
      )
      .subscribe(action);
  }

  public ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }
}
