import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  logIn: boolean = true
  title: string = "Вход";

  constructor(
    private TitleService: Title
  ){}

  ngOnInit(): void{
    this.TitleService.setTitle(this.title)
  }

  setLogIn(flag: boolean): void{
    this.logIn = flag;
    this.TitleService.setTitle(flag ? "Вход" : "Регистрация");
  }
}
