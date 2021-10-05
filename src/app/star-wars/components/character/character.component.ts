import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input()
  props!: { name: string; isLight?: boolean };
  @Output() changeSide = new EventEmitter();

  constructor() {}

  onClick(isLight = false) {
    this.props.isLight = isLight;
    this.changeSide.emit(this.props);
  }
}
