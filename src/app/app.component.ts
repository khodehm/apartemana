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
    // width: window.innerWidth,
    // height:window.innerHeight
  };
}
