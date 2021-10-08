import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @Input()
  public menu: any;
  constructor() {}
  @HostListener('click') toggleOpen() {
    if (this.isOpen) {
      this.menu.classList.remove('show');
    } else {
      this.menu.classList.add('show');
    }
    this.isOpen = !this.isOpen;
  }
}
