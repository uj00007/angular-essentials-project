import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface character {
  name: string;
  isLight: boolean;
}
@Component({
  selector: 'app-star-wars',
  templateUrl: './star_wars.component.html',
})
export class StarWarsComponent {
  routesList = ['All', 'Light', 'Dark'];
  activeRoute = 'Light';
  charactersList = [
    { name: 'Luke Skywalker', isLight: true },
    { name: 'Annikan Skywalker' },
  ];
  addToCharacterList(character: character) {
    if (!this.charactersList.some((el) => el.name === character.name)) {
      this.charactersList = [...this.charactersList, character];
    }
  }
  constructor(private route: ActivatedRoute) {}
}
