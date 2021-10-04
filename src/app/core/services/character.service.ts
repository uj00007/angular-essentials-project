import { Injectable } from '@angular/core';
import { characterListMock } from '../mocks/character.mock';
import { Character } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  charactersList: Character[] = [];
  constructor() {
    console.log('Character service is initialized');
    this.charactersList = characterListMock;
  }
  addCharacter(character: Character) {
    this.charactersList.push(character);
  }
  changeCharacterSide(name: string, isLight: boolean) {
    this.charactersList = this.charactersList.map((elem) => {
      if (elem.name === name) elem.isLight = isLight;
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
