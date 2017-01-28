import { PageErrorComponent } from './page-error/page-error.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { DisplayGamesService } from './display-games.service';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopgamesComponent } from './topgames/topgames.component';
import {routing} from "./app.route";

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    HeaderComponent,
    FooterComponent,
    TopgamesComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      AlertModule.forRoot(),
      routing
  ],
  providers: [DisplayGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
