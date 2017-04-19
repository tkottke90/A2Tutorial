import { Injectable } from '@angular/core';

@Injectable()
export class CardManager{

    createCard(type: string, header: string){
        return new Card(type, header);
    }
}

export class Card{
    type: string;
    header: string;
    description: string;

    constructor(newType: string, newHeader: string){
        this.type = newType;
        this.header = newHeader;
    }
}