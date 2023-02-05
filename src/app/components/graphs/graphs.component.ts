import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
})
export class GraphsComponent implements OnInit {
  public title = 'wasabi';
  public storage = '500';
  public transfer = '500';
  public options: Array<string> = ['hdd', 'multi'];

  constructor(
    private readonly eventBusService: EventBusService,
    private readonly calculatorService: CalculatorService
  ) {
    this.calculatorService.calculatePrice(
      this.storage,
      this.transfer,
      this.options
    );
  }

  public ngOnInit(): void {
    this.eventBusService.on('Storage', (data: string) => {
      this.storage = data;
      this.calculatorService.calculatePrice(
        this.storage,
        this.transfer,
        this.options
      );
    });

    this.eventBusService.on('Transfer', (data: string) => {
      this.transfer = data;
      this.calculatorService.calculatePrice(
        this.storage,
        this.transfer,
        this.options
      );
    });
  }

  public get backblaze() {
    return this.calculatorService.backblaze.toFixed(2);
  }

  public get bunny() {
    return this.calculatorService.bunny.toFixed(2);
  }

  public get scaleway() {
    return this.calculatorService.scaleway.toFixed(2);
  }

  public get vultr() {
    return this.calculatorService.vultr.toFixed(2);
  }
}
