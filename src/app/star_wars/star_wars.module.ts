import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarWarsRoutes } from './star_wars.routes';
import { StarWarsComponent } from './star_wars.component';

@NgModule({
  declarations: [StarWarsComponent],
  imports: [CommonModule, RouterModule.forChild(StarWarsRoutes)],
  exports: [StarWarsComponent],
})
export class StarWarsModule {}
