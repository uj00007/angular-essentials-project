import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarWarsRoutes } from './star-wars.routes';
import { StarWarsComponent } from './star-wars.component';
import { CharacterComponent } from './components/character/character.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    StarWarsComponent,
    CharacterComponent,
    CreateCharacterComponent,
    CharacterListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(StarWarsRoutes),
    RouterTestingModule,
  ],
  exports: [StarWarsComponent],
})
export class StarWarsModule {}
