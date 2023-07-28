import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  lastY: number = 0;
  hideHeader: boolean = false;
  
  @HostListener('document:scroll', ['$event']) 
  onScroll() {
    this.lastY >= document.body.getBoundingClientRect().y ? this.hideHeader = true : this.hideHeader = false;
    this.lastY = document.body.getBoundingClientRect().y;
  }
}
