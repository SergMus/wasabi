import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSliderComponent } from './components/input-slider/input-slider.component';
import { GraphsComponent } from './components/graphs/graphs.component';

@NgModule({
  declarations: [AppComponent, InputSliderComponent, GraphsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
