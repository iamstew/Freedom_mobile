import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  company: string = "";
  title: string = "Freedom Mobile";

  constructor(
    private TitleService: Title
  ){}

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
    this.type();
  }

  type() {
    let i = 0,
        speed = 100,
        elem = document.querySelector(".typing"),
        txt = this.title;

    const typeWriter = () => {
      if (i < txt.length) {
        elem ? this.company += txt.charAt(i) : null;
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    setTimeout(typeWriter, 1000);
  }
}
