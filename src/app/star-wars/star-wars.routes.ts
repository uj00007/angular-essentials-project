import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { StarWarsComponent } from './star-wars.component';

export const StarWarsRoutes: Routes = [
  {
    path: '',
    component: StarWarsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'characters',
      },
      {
        path: 'characters',
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
        component: CreateCharacterComponent,
      },
    ],
  },
];
