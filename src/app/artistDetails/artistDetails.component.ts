import { Component, OnInit } from '@angular/core';
import { Artist } from '../Artist.interface'

@Component({
    selector: 'artist-details'
    ,templateUrl: '/app/artistDetails/artistDetails.html'
    ,styleUrls:['/app/artistDetails/artistDetails.css']
    ,inputs:['artist']

})
export class ArtistDetailsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}