import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private loggingService:LoggingService) { }

    getMovies(): Observable<Movie[]> {
        this.loggingService.add("MovieService: getMovies called.");
        return of(
            [
                {
                    id: 1,
                    name: "Reservoir Dogs",
                    releaseDate: 1992,
                    description:"When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
                    imageUrl:"1.jpg"
                },
                {
                    id: 2,
                    name: "True Romance",
                    releaseDate: 1993,
                    description:"In Detroit, a lonely pop culture geek marries a call girl, steals cocaine from her pimp, and tries to sell it in Hollywood. Meanwhile, the owners of the cocaine, the Mob, track them down in an attempt to reclaim it.",
                    imageUrl:"2.jpg"
                },
                {
                    id: 3,
                    name: "Pulp Fiction",
                    releaseDate: 1994,
                    description:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                    imageUrl:"3.jpg"
                },
                {
                    id: 4,
                    name: "Natural Born Killers",
                    releaseDate: 1994,
                    description:"Two victims of traumatized childhoods become lovers and psychopathic serial murderers irresponsibly glorified by the mass media.",
                    imageUrl:"4.jpg"
                },
                {
                    id: 5,
                    name: "Four Rooms",
                    releaseDate: 1995,
                    description:"Four interlocking tales that take place in a fading hotel on New Year's Eve.",
                    imageUrl:"5.jpg"
                },
                {
                    id: 6,
                    name: "From Dusk till Dawn",
                    releaseDate: 1996,
                    description:"Two criminals and their hostages unknowingly seek temporary refuge in a truck stop populated by vampires, with chaotic results.",
                    imageUrl:"6.jpg"
                },
                {
                    id: 7,
                    name: "Jackie Brown",
                    releaseDate: 1997,
                    description:"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.",
                    imageUrl:"7.jpg"
                },
                {
                    id: 8,
                    name: "Kill Bill: Volume 1",
                    releaseDate: 2003,
                    description:"After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
                    imageUrl:"8.jpg"
                },
                {
                    id: 9,
                    name: "Kill Bill: Volume 2",
                    releaseDate: 2004,
                    description:"The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
                    imageUrl:"9.jpg"
                },
                {
                    id: 10,
                    name: "Sin City",
                    releaseDate: 2005,
                    description:"A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.",
                    imageUrl:"10.jpg"
                },
                {
                    id: 11,
                    name: "Grindhouse: Death Proof",
                    releaseDate: 2007,
                    description:"Quentin Tarantino and Robert Rodriguez's homage to exploitation double features in the 60s and 70s with two back-to-back cult films that include previews of coming attractions between them.",
                    imageUrl:"11.jpg"
                },
                {
                    id: 12,
                    name: "Grindhouse: Planet Terror",
                    releaseDate: 2007,
                    description:"After an experimental bio-weapon is released, turning thousands into zombie-like creatures, it's up to a rag-tag group of survivors to stop the infected and those behind its release.",
                    imageUrl:"12.jpg"
                },
                {
                    id: 13,
                    name: "Inglourious Basterds",
                    releaseDate: 2009,
                    description:"In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
                    imageUrl:"13.jpg"
                },
                {
                    id: 14,
                    name: "Django Unchained",
                    releaseDate: 2012,
                    description:"With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
                    imageUrl:"14.jpg"
                },
                {
                    id: 15,
                    name: "The Hateful Eight",
                    releaseDate: 2015,
                    description:"In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
                    imageUrl:"15.jpg"
                },
                {
                    id: 16,
                    name: "Once Upon a Time in Hollywood",
                    releaseDate: 2019,
                    description:"A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
                    imageUrl:"16.jpg"
                },
            ]
        );
    }
}
