import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { StarWarsComponent } from './star-wars.component';

export const StarWarsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters',
  },
  {
    path: 'characters',
    component: StarWarsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'All',
      },
      {
        path: ':side',
        component: CharacterListComponent,
      },
    ],
  },
  {
    path: 'create-character',
    component: StarWarsComponent,
    children: [
      {
        path: '',
        component: CreateCharacterComponent,
      },
    ],
  },
];
