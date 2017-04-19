import { Component, Input } from '@angular/core';
import { Card } from 'app/services/card-manager.service';

@Component({
    selector: 'test-card',
    templateUrl: './test-card.component.html',
    styleUrls: ['../../stylesheets/card-base.css']
})
export class TestCard{
    @Input() cardData: Card;

    descShow: boolean = false;

    constructor(){
        if(this.cardData.description != null){this.descShow = true;}
    }
}