import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

    console.log("Spotify service listo");
   }

   getNewRelases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB9RkBQY85SctAXAgztPrDdVtrcVHVVkmKPeJ2BYoMf7GD9veFcqbb-J0mi7qlARreFTB695Lta84N6fh6TYmoREp9zi3pLbhDkRyvCX1W6bXM2doA'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .subscribe(data => {
          console.log(data);
        })

   }
}
