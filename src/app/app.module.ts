import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/component.header/component.header';
import { CardContainer } from './components/card-container/component.card-container';

import { TestCard } from 'app/components/cards/test-card/test-card.component';
import { AddCard } from 'app/components/cards/add-card/add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardContainer,
    TestCard,
    AddCard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
