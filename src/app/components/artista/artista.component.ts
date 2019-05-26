import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  topTrack: any[] = [];

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {
      
    this.loading = true;

      this.router.params.subscribe( params => {
       
        this.getArtista( params['id'] );
        this.getTopTracks( params['id']);
      });

   }

  ngOnInit() {
  }

  getArtista( id: string ) {
    
      this.loading = true;

        this.spotify.getArtista(id)
            .subscribe( artista => {
                this.artista = artista;
                this.loading = false;
            })
  }
  
  getTopTracks( id: string ){
    this.spotify.getTopTrack(id)
        .subscribe( topTrack => {
            this.topTrack = topTrack
            console.log(topTrack);
        }); 
  }

}
