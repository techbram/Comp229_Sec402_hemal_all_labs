import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class GameRepository
{
  private games: Game[] = [];
  private devs: string[] = [];

  constructor(private dataSource: StaticDataSource)
  {
    dataSource.getGames().subscribe(data => {
      this.games = data;
      this.devs = data.map(g => g.developer!)
        .filter((a, index, array) => array.indexOf(a) === index).sort() ;
    });
  }

  getGames(developer: string | null = null): Game[]
  {
    return this.games
      .filter(b => developer == null || developer === b.developer);
  }

  getGame(id: number): Game | undefined
  {
    return this.games.find(b => b._id === id);
  }

  getDevs(): string[]
  {
    return this.devs;
  }
}
