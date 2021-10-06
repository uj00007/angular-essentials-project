import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { characterListMock } from '../mocks/character.mock';
import { Character } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  charactersList: Character[] = [];
  //subject is a certain object provided by rxjs, like an event emitter, which we can subscribe too also
  charactersChanged = new Subject<void>();
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
    this.charactersChanged.next();
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
