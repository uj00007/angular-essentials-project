import { Component, OnInit } from '@angular/core';
import { translate } from '@rxweb/translate';
import { CharacterService } from '../core/services/character.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
})
export class StarWarsComponent implements OnInit {
  characterService: CharacterService;
  @translate({ translationName: 'star-wars' }) starWars: any;
  constructor(characterService: CharacterService) {
    this.characterService = characterService;
  }
  ngOnInit(): void {
    this.characterService.fetchCharactersFromApi();
  }
}
