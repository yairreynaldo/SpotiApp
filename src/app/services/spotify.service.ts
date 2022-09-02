import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

    console.log("Spotify service listo");
   }

   getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCBqBqPyrHBe6lRM5ERQdV1UbR6o5EUQsTEPeLAof0z3-och10swSVhC2ZDMGvUyZP_pUsiWoJQ6STOHpqRqERYVD0QaL82UQEgvZHpN1ahM6uAdZY'
    });

    return this.http.get( url, { headers });
   }

   getNewRelases(){

    return this.getQuery('browse/new-releases')
              .pipe( map( (data: any) => data['albums'].items));

   }

   getArtista( termino: string){
      
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( (data: any) => data['artists'].items));

   }
}
