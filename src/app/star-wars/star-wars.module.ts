import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarWarsRoutes } from './star_wars.routes';
import { StarWarsComponent } from './star-wars.component';
import { CharacterComponent } from './components/character/character.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarWarsComponent,
    CharacterComponent,
    CreateCharacterComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(StarWarsRoutes)],
  exports: [StarWarsComponent],
})
export class StarWarsModule {}
