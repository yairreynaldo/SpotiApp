import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private serviceSpotify: SpotifyService) { 


    this.serviceSpotify.getNewRelases()
        .subscribe((data: any) => {
          console.log(data);
          this.nuevasCanciones = data;
        });
  }


  ngOnInit(): void {
  }

}
