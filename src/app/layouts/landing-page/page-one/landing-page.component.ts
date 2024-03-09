import { NgForOf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('arrow', { read: ElementRef }) arrow!: ElementRef;
  ngAfterViewInit(): void {
    window.scrollTo();
    let button = this.arrow.nativeElement;

    console.log(this.arrow.nativeElement);
  }
  ngOnInit(): void {
    //  const swiper=new Swiper();
  }
  constructor() {}

  spanText: string[] = ['بــا آپاراتمــانا', '  شارژ واحدت', ' رایگان میشه'];
}
