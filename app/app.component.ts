import { Component }       from 'angular2/core';


import { MapComponent } from './map.component';
@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html',
    directives: [MapComponent]
})
export class AppComponent implements OnInit {
    title = 'Angular2, Openlayers3, AngularMaterial2';
    _map: MapComponent;

    constructor() {

    }

    ngOnInit() {
        this._map = new MapComponent();
    }

}
