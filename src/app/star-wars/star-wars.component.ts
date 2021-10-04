import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Character } from '../core/models';
import { CharacterService } from '../core/services/character.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
})
export class StarWarsComponent {
  routesList = ['All', 'Light', 'Dark'];
  activeRoute = 'Light';
  charactersList: Character[] = [];
  addToCharacterList(character: Character) {
    if (!this.charactersList.some((el) => el.name === character.name)) {
      this.characterService.addCharacter(character);
    }
  }
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  getCharacters() {
    this.charactersList = this.characterService.getCharacters('all');
  }

  ngOnInit() {
    this.getCharacters();
  }
}
