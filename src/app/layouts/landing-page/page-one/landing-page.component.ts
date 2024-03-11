import { NgForOf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
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
  @HostListener('window.scroll', ['$event'])
  onScroll(event: Event) {
    console.log(event);
  }
  ngAfterViewInit(): void {

  }
  constructor() {}

  scrollToMiddle() {
    const ScrollMiddle: number = window.innerHeight / 2;
    this.arrow.nativeElement.scroll({
      top: ScrollMiddle,
      behavior: 'smooth',
    });
    console.log(this.scrollToMiddle);
  }
}
