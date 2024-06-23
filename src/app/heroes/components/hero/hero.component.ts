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

  changeHero(newName: string): void {
    this.name = newName;

  }

  changeAge(newAge: number): void {
    this.age = newAge;
  }

  reset(): void {
    this.age = 45;
    this.name = 'ironMan';
    // document.querySelectorAll('h1')?.forEach((element) => {
    //   element.innerHTML = '<h1> desde angular </h1>';
    // });
  }
}
