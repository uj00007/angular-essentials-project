import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss'],
})
export class CreateCharacterComponent {
  name = '';
  radioOption = '';
  @Output() addCharacter = new EventEmitter();
  constructor() {}

  onCreate() {
    if (this.name && this.radioOption) {
      this.addCharacter.emit({
        name: this.name,
        isLight: this.radioOption === 'Light' ? true : false,
      });
    }
  }
}
