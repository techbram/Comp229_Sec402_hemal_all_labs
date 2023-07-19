import { NgModule } from '@angular/core';
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
export class ModelModule {}
