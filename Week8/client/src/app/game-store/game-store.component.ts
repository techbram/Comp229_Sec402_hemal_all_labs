import { Component } from '@angular/core';
import { Game } from '../model/game.model';
import { GameRepository } from '../model/game.repository';

@Component({
  selector: 'app-game-store',
  templateUrl: './game-store.component.html',
  styleUrls: ['./game-store.component.css']
})

export class GameStoreComponent {


  public selectedDeveloper = null;
  public gamesPerPage = 4;
  public selectedGame = 1;

  constructor(private repository: GameRepository) { }

  get developers(): string[]
  {
    return this.repository.getDevs();
  }

  get games(): Game[]
  {
    return this.repository.getGames();
  }

}
