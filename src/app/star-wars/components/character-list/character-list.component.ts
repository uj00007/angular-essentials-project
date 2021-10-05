import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/models';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  routesList = ['All', 'Light', 'Dark'];
  activeRoute = '';
  charactersList: Character[] = [];
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
  }
}
