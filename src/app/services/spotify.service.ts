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
      'Authorization' : 'Bearer BQAcwSFiTi0L_9N0XHkiz_sl45mT7zAlZOsybSGPzNzpVLPYQC384DuQA86lHZdLn88FmklEVDW-7QL9nlbe0vNaPWsKpORE32oCK_8VtLGfR1wuw0U'
    });

    return this.http.get( url, { headers });
   }

   getNewRelases(){

    return this.getQuery('browse/new-releases')
              .pipe( map( (data: any) => data['albums'].items));

   }

   getArtistas( termino: string){
      
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( (data: any) => data['artists'].items));
              

   }

   getArtista( id: string){
      
    return this.getQuery(`artists/${ id }`);
              /* .pipe( map( (data: any) => data['artists'].items)); */

   }

   getTopTracks( id: string){
      
    return this.getQuery(`artists/${ id }/top-tracks?market=es`)
               .pipe( map( (data: any) => data['tracks']));

   }

}
