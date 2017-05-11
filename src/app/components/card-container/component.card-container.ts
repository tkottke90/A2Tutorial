import { Component } from '@angular/core';
import { Card } from 'app/services/card-manager.service';

@Component({
    selector: 'card-container',
    templateUrl: './component.card-container.html',
    styleUrls: ['../stylesheets/component.card-container.css']
})

export class CardContainer {

    myCard: Card[] = [
        new Card("text","Text Card Example","They say that pressure and stress creates beautiful things. Diamonds withstand incredible pressure during their creation. The clam deals with the annoying piece of sand during the creation of a pearl. The caterpillar deals with the stress and pressure of creating and being wrapped in a cocoon and having to break free before finding freedom in a new form. There are some types of plants and flowers that only bloom and grow after being burnt in a fire."),
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
        new Card("image", "Triforce Image", "http://www.thinkgeek.com/images/products/additional/large/jipm_loz_triforce_light_vendor.jpg"),
        new Card("image", "D Va Play of the Game", "https://keep.google.com/u/0/media/1ky3DwDqEpPeoWhfjQOB9uU6D25TwJmE?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=w794-h894"),  
        new Card("quick","Quick Note",null)
    ];

    constructor(){
        this.myCard[1].description = "This is a test description";
    }
    

}