import { Injectable } from '@angular/core';
import { characterListMock } from '../mocks/character.mock';
import { Character } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  charactersList: Character[] = [];
  constructor() {
    this.charactersList = characterListMock;
  }
  addCharacter(character: Character) {
    this.charactersList.push(character);
  }
  changeCharacterSide(character: Character) {
    this.charactersList = this.charactersList.map((elem) => {
      if (elem.name === character.name) elem.isLight = character.isLight;
      return elem;
    });
  }
  getCharacters(side: string): Character[] {
    switch (side) {
      case 'Light':
        return this.charactersList.filter((elem) => elem.isLight);
      case 'Dark':
        return this.charactersList.filter(
          (elem) => elem.isLight != undefined && elem.isLight === false
        );
      default:
        return this.charactersList;
    }
  }
}
