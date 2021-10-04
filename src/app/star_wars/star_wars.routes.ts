import { Routes } from '@angular/router';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { StarWarsComponent } from './star_wars.component';

export const StarWarsRoutes: Routes = [
  { path: '', redirectTo: 'characters' },
  { path: 'characters', component: StarWarsComponent },
  //need to have child routes of light and dark also, so that when we hit characters/light, light characters should be highlighted , and same goes for characters/dark
  { path: 'create-character', component: CreateCharacterComponent },
];
