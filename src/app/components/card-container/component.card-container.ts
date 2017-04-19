import { Component } from '@angular/core';
import { Card } from 'app/services/card-manager.service';

@Component({
    selector: 'card-container',
    templateUrl: './component.card-container.html',
    styleUrls: ['../stylesheets/component.card-container.css']
})

export class CardContainer {

    myCard: Card[] = [new Card("test","Test 1"),new Card("test", "This is a test of a card with a max length of 10")];

    constructor(){
        this.myCard[1].description = "This is a test description";
    }
    

}