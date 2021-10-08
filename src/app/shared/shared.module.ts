import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [DropdownDirective],
  declarations: [DropdownDirective],
  providers: [],
})
export class SharedModule {}
