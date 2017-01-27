import { Component, OnInit } from '@angular/core';
import { DisplayGamesService } from '../display-games.service';
import { Jeu } from '../jeu';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games;
  constructor(private displayGamesService:DisplayGamesService) { }

  ngOnInit() {
    this.games = this.displayGamesService.getGames();
  }

}
