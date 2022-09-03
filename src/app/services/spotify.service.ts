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
      'Authorization' : 'Bearer BQDnfvIpmKsHnjffRe2KWDKW9jXk0ofGLKy4jTDeBMqsLd33wXU2dL-q-IEk6Re-4kQtc7-Mvoz6byLNV8wfUZjWc_d0JWMrzaBoLGCiqKnIjTLpbM0'
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
