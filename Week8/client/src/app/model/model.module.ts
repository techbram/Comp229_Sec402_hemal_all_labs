import { NgModule } from '@angular/core';
import { Game } from '../model/game.model';
import { GameRepository} from './game.repository';
import { StaticDataSource } from './static.datasource';




//import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [GameRepository, StaticDataSource, 
  {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule 
{
  public selectedDeveloper = null;
  public booksPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: GameRepository) { }

  ngOnInit():void{}

  
  get developers(): string[]
  {
    return this.repository.getDevs();
  }



  // changeAuthor(newAuthor?: string): void
  // {
  //   this.selectedAuthor = newAuthor;
  // }

  // changePage(newPage: number): void
  // {
  //   this.selectedPage = newPage;
  // }

  // changePageSize(newSize: number): void
  // {
  //   this.booksPerPage = Number(newSize);
  //   this.changePage(1);
  // }

  // get pageCount(): number
  // {
  //   return Math.ceil(this.repository
  //     .getBooks(this.selectedAuthor).length / this.booksPerPage);
  // }

  // addBookToCart(book: Book): void
  // {
  //   this.cart.addLine(book);
  // }
}
