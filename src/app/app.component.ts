import { Component } from '@angular/core';

interface character {
  name: string;
  isLight: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-essentials-project';
  charactersList = [
    { name: 'Luke Skywalker', isLight: true },
    { name: 'Annikan Skywalker' },
  ];
  addToCharacterList(character: character) {
    if (!this.charactersList.some((el) => el.name === character.name)) {
      this.charactersList = [...this.charactersList, character];
    }
  }
}
