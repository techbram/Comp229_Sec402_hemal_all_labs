import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import {   GameStoreComponent } from '../game-store/game-store.component';
//import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [GameStoreComponent],
  exports: [GameStoreComponent]
})
export class GameStoreModule {}