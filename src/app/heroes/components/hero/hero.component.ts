import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  changeHero(): void{
    let heroesName: string[] = ['Spider-Man', 'Wolverine','Deadpool','Ironman'];
    this.name = heroesName[0];
  }

  changeAge():void{
    this.age = 21;

  }

  resetForm(): void{
    // this.name = 'Ironman';
    this.age = 45;
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    })
  }
}
