import { Component, Input, OnInit } from '@angular/core';
import { Card, CardType } from 'app/services/card-manager.service';

@Component({
    selector: 'test-card',
    templateUrl: './test-card.component.html',
    styleUrls: ['../../stylesheets/card-base.css','../../stylesheets/card-base.mobile.css']
})
export class TestCard implements OnInit{
    @Input() cardData: Card;

    myCode = "";

    isTextEnabled: boolean = false;
    isImageEnabled: boolean = false;
    isCodeEnabled: boolean = false;


    ngOnInit(){
        console.log(this.cardData.type);
        console.log(CardType[this.cardData.type]);
        switch(CardType[this.cardData.type]){
            case 0:
                break;
            case 1:
                this.isTextEnabled = true;
                this.isImageEnabled, this.isCodeEnabled = false;
                break;
            case 2:
                this.isImageEnabled = true;
                this.isTextEnabled, this.isCodeEnabled = false;
                break;
            case 3:
                break;
            case 4:
                this.isCodeEnabled = true;
                this.isImageEnabled, this.isTextEnabled = false;
                for(let i = 0; i < this.cardData.code.length; i++){
                    this.myCode += this.cardData.code[i] + "\r\n";
                }
                
                break;
            default:
        }    
    }

    evaluateCode(lang: string,code: string){

    }
}