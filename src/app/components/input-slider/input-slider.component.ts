import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent {
  @Input() public color = 'blue';
  @Input() public title = '';

  constructor(private readonly eventBusService: EventBusService) {}

  public count = '500';

  public onInput(event: Event): void {
    this.count = (event.target as HTMLInputElement).value;
    this.eventBusService.emit({
      name: this.title,
      data: (event.target as HTMLInputElement).value,
    });
  }
}
