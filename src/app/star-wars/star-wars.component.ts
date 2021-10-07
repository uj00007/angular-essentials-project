import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../core/services/character.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
})
export class StarWarsComponent implements OnInit {
  characterService: CharacterService;
  constructor(characterService: CharacterService) {
    this.characterService = characterService;
  }
  ngOnInit(): void {
    this.characterService.fetchCharactersFromApi();
  }
}
