import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'wasabi';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = '../assets/range-input.js';
    script.text = ``;
    this.renderer.appendChild(this._document.body, script);
  }
}
