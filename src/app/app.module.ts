import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CharacterComponent } from './character/character.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

@NgModule({
  declarations: [AppComponent, CharacterComponent, CreateCharacterComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
