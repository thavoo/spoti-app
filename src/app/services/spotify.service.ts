import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
      console.log('Service spotify ready');
   }

   getQuery(query: string) {
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization':'Bearer BQDLdktcggW3nJ-0f2MUGNyf4YsgPmzG4KUr7tbhnmtHjNQyxxBoiMuEp_lbNh8278L3vjyRKxW5HoZmesA'
      });

      return this.http.get(url, { headers });
   }

   getNewReleases()
   {

        return this.getQuery('browse/new-releases?limit=20')
                    .pipe( map( data => {
                      return data['albums'].items
                  }));
        
   }

   getArtistas( termino: string ) {
        
            return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
                    .pipe( map( data => {
                      return data['artists'].items;
                  }));
        
   }

   getArtista( id: string){
      return this.getQuery(`artists/${id}`);
   }

   getTopTrack( id: string) {
        return this.getQuery(`artists/${id}/top-tracks?country=us`)
          .pipe( map( data => data['tracks']))
   }
   
}
