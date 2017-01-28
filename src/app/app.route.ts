import { Routes,RouterModule } from "@angular/router";
import { GamesComponent } from "./games/games.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { TopgamesComponent } from "./topgames/topgames.component";
import { PageErrorComponent } from "./page-error/page-error.component"

const APP_ROUTES : Routes = [
    { path:'', component: TopgamesComponent },
    { path:'bibliotheque', component: GamesComponent },
    { path:'header', component: HeaderComponent },
    { path:'footer', component: FooterComponent },
    { path:'**', component: PageErrorComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);