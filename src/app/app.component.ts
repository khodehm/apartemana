import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'apartemanaa';
  config: SwiperOptions = {
    direction: 'vertical',
    height: window.innerHeight,
    width: window.innerWidth,
    speed: 400,
    allowSlidePrev: true,
    allowSlideNext: true,
  };
}
