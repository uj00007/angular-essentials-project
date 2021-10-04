import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input()
  props!: { name: string; isLight?: boolean };

  constructor() {}

  onClick(isLight = false) {
    console.log(this.props);

    this.props.isLight = isLight;
    console.log(this.props);
  }
}
