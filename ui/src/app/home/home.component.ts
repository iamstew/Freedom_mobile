import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { Writer } from "t-writer.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  company = "Freedom Mobile";
  title = "Главная";

  constructor(
    private TitleService: Title
  ){}

  ngOnInit(): void {
    this.TitleService.setTitle(this.title)
  }

}
