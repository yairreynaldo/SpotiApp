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
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private serviceSpotify: SpotifyService) { 

    this.loading = true;
    this.error = false;
    this.mensajeError = '';

    this.serviceSpotify.getNewRelases()
        .subscribe((data: any) => {
          console.log(data);
          this.nuevasCanciones = data;
          this.loading = false
        }, (errorServicio) =>{
          this.error = errorServicio;
          console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;
        });
  }


  ngOnInit(): void {
  }

}
