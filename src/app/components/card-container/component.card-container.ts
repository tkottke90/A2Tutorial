import { Component } from '@angular/core';
import { Card } from 'app/services/card-manager.service';

@Component({
    selector: 'card-container',
    templateUrl: './component.card-container.html',
    styleUrls: ['../stylesheets/component.card-container.css']
})

export class CardContainer {

    myCard: Card[] = [
        new Card("text","Text Card Example","This is an example of a text image"),
        new Card("code", "Write to Prefs Script",
        ["string updatePrefs =",  
        "'* Preferences: * \\r\\n'",      
        "+'Operating Radius|' + DefaultRadius + \\r\\n",       
        "+ 'OriginGPS|' + Origin.ToString() + \\r\\n",      
        "+ 'DroneStatus|' + DroneStatus + \\r\\n",    
        "+ 'RuntimeCount|' + runCount + \\r\\n", 
        "+ 'AIAttempts|' + attempts + \\r\\n",  
        "+ 'AICoordinateSpacing|' + coordSpacing + \\r\\n",  
        "+ 'AICalcFitness|",   
        "+ String.Format('{0}-{1}-{2}-{3}-{4}-{5}', genCoordFitness[0],genCoordFitness[1],genCoordFitness[2],genCoordFitness[3],genCoordFitness[4],genCoordFitness[5]);"]),
        new Card("image", "Triforce Image", "http://www.thinkgeek.com/images/products/additional/large/jipm_loz_triforce_light_vendor.jpg")    
    ];

    constructor(){
        this.myCard[1].description = "This is a test description";
    }
    

}