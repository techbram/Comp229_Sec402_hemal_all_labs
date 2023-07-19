import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
  private games: Game[] =
  [
    new Game(1, 'Game 1', 'Developer 1', 'Year 1', 'Short Description 1' , 10),
    new Game(2, 'Game 2', 'Developer 1', 'Year 2', 'Short Description 2' , 10),
    new Game(3, 'Game 3', 'Developer 1', 'Year 3', 'Short Description 3' , 10),
    new Game(4, 'Game 4', 'Developer 1', 'Year 4', 'Short Description 4' , 10),
    new Game(5, 'Game 5', 'Developer 2', 'Year 6', 'Short Description 6' , 10),
    new Game(6, 'Game 6', 'Developer 2', 'Year 6', 'Short Description 6' , 10),
    new Game(7, 'Game 7', 'Developer 2', 'Year 7', 'Short Description 7' , 10),
    new Game(8, 'Game 8', 'Developer 2', 'Year 8', 'Short Description 8' , 10),
    new Game(9, 'Game 9', 'Developer 3', 'Year 9', 'Short Description 9' , 10),
    new Game(10, 'Game 10', 'Developer 3', 'Year 10', 'Short Description 10' , 10),
    new Game(11, 'Game 11', 'Developer 3', 'Year 11', 'Short Description 11' , 10),
    new Game(12, 'Game 12', 'Developer 4', 'Year 12', 'Short Description 12' , 10),
    new Game(13, 'Game 13', 'Developer 4', 'Year 13', 'Short Description 13' , 10),
    new Game(14, 'Game 14', 'Developer 4', 'Year 14', 'Short Description 14' , 10),
    new Game(15, 'Game 15', 'Developer 4', 'Year 15', 'Short Description 15' , 10),
  ];

  getGames(): Observable<Game[]>
  {
    return from([this.games]);
  }
}
