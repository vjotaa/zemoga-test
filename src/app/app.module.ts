import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './components/card/card.component';
import { VoteCardComponent } from './components/vote-card/vote-card.component';
import { ProgressLineComponent } from './components/progress-line/progress-line.component';
import { TrialsComponent } from './pages/trials/trials.component';
import { HowComponent } from './pages/how/how.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    VoteCardComponent,
    ProgressLineComponent,
    TrialsComponent,
    HowComponent,
    AuthenticationComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
