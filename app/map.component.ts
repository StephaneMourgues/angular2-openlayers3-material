import {Component} from 'angular2/core';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MdButton} from '@angular2-material/button/button';
import {MdSidenavLayout} from '@angular2-material/sidenav/sidenav';
import {MdSidenav} from '@angular2-material/sidenav/sidenav';
import {MdList} from '@angular2-material/list/list';
import { MD_LIST_DIRECTIVES }  from '@angular2-material/list/list';
import {MdInput} from '@angular2-material/input/input';

declare var ol: any;

@Component({
    selector: 'my-map-app',
    styleUrls: ['app/map.component.css'],
    templateUrl: 'app/map.component.html',
    directives: [MdToolbar, MdButton, MdSidenavLayout, MdSidenav, MD_LIST_DIRECTIVES, MdInput, MapComponent]
})

export class MapComponent implements OnInit {
    private map: Map;
    private myView: View;

    constructor() {
        // Don't create the map here or interactions with external controls will not work

    }

    ngOnInit() {
        this.myView = new ol.View({
            center: ol.proj.transform([4.35, 45.45], 'EPSG:4326', 'EPSG:3857'),
            zoom: 13
        });

        this.map = new ol.Map({
            target: 'mymap',
            controls: [],
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],

            view: this.myView


        });
    }

    zoomIn() {
        var zoomLevel = this.myView.getZoom();
        if (zoomLevel != undefined) {
            this.myView.setZoom(zoomLevel + 1);
        }
        else {
            console.log('current zoom level is undefined');
            this.myView.setZoom(13);
        }
    }

    zoomOut() {
        var zoomLevel = this.map.getView().getZoom();

        if (zoomLevel != undefined) {
            this.map.getView().setZoom(zoomLevel - 1);
            this.map.updateSize();
        }
        else {
            console.log('current zoom level is undefined');
            this.map.getView().setZoom(13);
        }
    }

    doSomething() {
        this.map.getView().setRotation(this.map.getView().getRotation() + 0.1);
    }

    openSideNave(mysidenav) {
        mysidenav.open();
    }
    closeSideNave(mysidenav) {
        mysidenav.close();
    }
}
