import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private el: ElementRef) {}

  cursor: HTMLElement | null = null;  

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.cursor = this.el.nativeElement.firstChild;
    if (this.cursor) {
      this.cursor.style.opacity = `1`;
      this.cursor.style.left = `${event.clientX}px`;
      this.cursor.style.top = `${event.clientY}px`;
    }
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    this.cursor ? this.cursor.style.opacity = '0' : null;
  }
}
