// this fill will hold our top level routes array
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'star-wars',
  },
  {
    path: 'star-wars',
    loadChildren: () =>
      import('./star_wars/star_wars.module').then(
        (module) => module.StarWarsModule
      ),
  },
  {
    path: 'admin-ui',
    loadChildren: () =>
      import('./admin-ui/admin-ui.module').then(
        (module) => module.AdminUiModule
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
