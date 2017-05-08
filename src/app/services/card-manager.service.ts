import { Injectable } from '@angular/core';

export enum CardType {
    quicktext,
    text,
    image,
    list,
    code
}

export enum codeLangType {
    cSharp=1,
    Java,
    Javascript,
    Typescript,
    HTML,
    CSS,
}

export class Card{
    type: string;
    header: string;
    
    description: string;
    imageURL: string;
    list: string[];
    code: string[];
    

    constructor(newType: string, newHeader: string, data: any){
        this.type = newType;
        this.getType(this.type, data);
        this.header = newHeader;
    }

    getType(type: string, data: any){
        let card = CardType[type];
        switch(card){
            case 0: // Quick Text Card
                break;
            case 1: // Text Card
                this.description = data;
                break;
            case 2: // Image Card
                this.imageURL = data;
                break;
            case 3: // List Card
                break;
            case 4: // Code Card
                this.code = data;
                break;
            default:
                
        }
    }
}

@Injectable()
export class CardManager{

    createCard(type: string, header: string){
        return new Card(type, header, "data");
    }
}