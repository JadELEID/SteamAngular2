import { Component, OnInit } from '@angular/core';
import { DisplayGamesService } from '../display-games.service';
import { Jeu } from '../jeu';

@Component({
  selector: 'app-topgames',
  templateUrl: './topgames.component.html',
  styleUrls: ['./topgames.component.css']
})
export class TopgamesComponent implements OnInit {

  games;
  constructor(private displayGamesService:DisplayGamesService) { }

  ngOnInit() {
    this.games = this.displayGamesService.getTopGames();
  }

}
