import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/core/models';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit, OnDestroy {
  routesList = ['All', 'Light', 'Dark'];
  activeRoute = '';
  charactersList: Character[] = [];
  subscription: any;
  constructor(
    public characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.activeRoute = params.side;
      this.charactersList = this.characterService.getCharacters(
        this.activeRoute
      );
    });
    //for our personal subscriptions , we need to unsubscribe them also .. to protect any memory leaks, the angular observables like above , automatically closes them
    this.subscription = this.characterService.charactersChanged.subscribe(
      () => {
        this.charactersList = this.characterService.getCharacters(
          this.activeRoute
        );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
