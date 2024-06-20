import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;
  public getHeroDescription(): string {
    return `${this.name} tiene ${this.age} de edad`;
  }

  get capitalizeName():string {
    return this.name.toUpperCase();
  }
}
