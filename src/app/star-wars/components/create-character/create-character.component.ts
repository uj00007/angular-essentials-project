import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss'],
})
export class CreateCharacterComponent {
  name = '';
  radioOption = '';
  // as not passing the output function to anymore from parent , but using a service directly
  // @Output() addCharacter = new EventEmitter();
  constructor(private characterService: CharacterService) {}

  onCreate() {
    if (this.name && this.radioOption) {
      this.characterService.addCharacter({
        name: this.name,
        isLight: this.radioOption === 'Light' ? true : false,
      });
    }
  }
}
