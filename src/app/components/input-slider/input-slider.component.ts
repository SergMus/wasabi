import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent {
  @Output() inputValue = new EventEmitter<string>();
  @Input() color = 'blue';

  public title = 'Storage';
  public count = '500';

  public onInput(event: Event): void {
    this.count = (event.target as HTMLInputElement).value;
    this.inputValue.emit((event.target as HTMLInputElement).value);
  }
}
