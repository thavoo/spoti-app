import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

    nuevasCanciones: any[] = [];
    loading: boolean;
    error: boolean = false;
    mensaje: string;

  constructor( private spotify: SpotifyService ) {

      this.loading = true;

      this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (err) => {
        this.error = true;
        this.loading = false;
        this.mensaje = err.error.error.message;


      });

   }

  ngOnInit() {
  }

}
