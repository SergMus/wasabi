import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  public backblaze!: number;
  public bunny!: number;
  public scaleway!: number;
  public vultr!: number;

  public calculatePrice(
    storageGB: string,
    transferGB: string,
    options?: Array<string>
  ): void {
    let storage = +storageGB;
    let transfer = +transferGB;

    storage * 0.005 + transfer * 0.01 <= 7
      ? (this.backblaze = 7)
      : (this.backblaze = storage * 0.005 + transfer * 0.01);

    if (options?.includes('hdd')) {
      let hdd = +storageGB * 0.01;

      if (hdd + transfer * 0.01 >= 10) {
        this.bunny = 10;
      } else {
        this.bunny = hdd + transfer * 0.01;
      }
    }

    if (options?.includes('ssd')) {
      let ssd = +storageGB * 0.02;

      if (ssd + transfer * 0.01 >= 10) {
        this.bunny = 10;
      } else {
        this.bunny = ssd + transfer * 0.01;
      }
    }

    if (options?.includes('multi') && storage >= 75 && transfer >= 75) {
      this.scaleway = storage * 0.06 + transfer * 0.02 - 6;
    } else if (options?.includes('single') && storage >= 75 && transfer >= 75) {
      this.scaleway = storage * 0.03 + transfer * 0.02 - 3.75;
    } else {
      this.scaleway = 0;
    }

    storage * 0.01 + transfer * 0.01 <= 5
      ? (this.vultr = 5)
      : (this.vultr = storage * 0.01 + transfer * 0.01);
  }

  public calculateLowest(): string {
    return Math.min(
      +this.backblaze,
      +this.bunny,
      +this.scaleway,
      +this.vultr
    ).toFixed(2);
  }
}
