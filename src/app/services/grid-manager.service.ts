import { Injectable } from '@angular/core';

@Injectable()
export class GridManager
{

    cardCount : Number = 0;
    rowCount : Number = 0;
    columnCount: Number = 0;

    windowWidth = 0;

    constructor(cCount : Number)
    {
        this.cardCount = cCount;

        
    }

}