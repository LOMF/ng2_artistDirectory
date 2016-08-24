import {Component, OnInit} from "@angular/core"
import {ArtistItemComponent} from "./artistItem/artist-item.component"
import {ArtistDetailsComponent} from "./artistDetails/artistDetails.component"
import { SearchPipe } from './search.pipe'

import ARTISTS  from './artist.data'
import { Artist } from './Artist.interface'


@Component({
    selector: "app"
    , templateUrl: "./app/app.html"
    , directives:[ArtistItemComponent, ArtistDetailsComponent]
    , styleUrls: ['./app/app.css']
    , pipes: [SearchPipe]
})
export class AppComponent implements OnInit {

    // name: string;
    // school:string;
    query:string;
    artists: Artist[];
    currentArtist: Artist;
    constructor() {
        //this.name = 'Ludvig';
        this.query='';
        this.artists = ARTISTS;
        
    }
    onClick(artist:Artist, element:HTMLLIElement) {
        //this.name= artist.name; //'bob';
//        this.school = artist.school;
        element.style.backgroundColor='#fece3e';
        console.log(artist);

    }
    showArtist(artist:Artist) {
        this.currentArtist = artist;
    }
    // addArtist(name:string, school:string) {
    //     this.artists.push ({name:name, school:school });
    // }
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
