import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;
  public capitalize(name: string): string {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  }
}
