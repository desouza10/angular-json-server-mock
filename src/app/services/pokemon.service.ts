import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getPokemons() {
    if(environment.production){
      return this.http.get(`${this.apiUrl}/pokemon?limit=100`).pipe(
        map((response: any) => response.results)
      );
    }else{
      return this.http.get(`${this.apiUrl}/pokemon`).pipe(
        map((response: any) => response.results)
      );
    }
  }

getPokemonByName(name: string): Observable<any> {
  if(environment.production){
      return this.http.get<any>(`${this.apiUrl}/pokemon/${name}`);
    } else {
      return this.http.get<any[]>(`${this.apiUrl}/pokemon/${name}`).pipe(
        map((response: any) => response[0])
      );
    }
  }

  getImageUrl(index: number): string {
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const imageItem = `${index + 1}.png`; 
    return `${url}${imageItem}`
  }
}
