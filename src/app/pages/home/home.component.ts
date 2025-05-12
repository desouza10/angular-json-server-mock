import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonHeaderComponent } from '../../shared/components/pokemon-header/pokemon-header.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PokemonHeaderComponent],
  providers: [PokemonService, HttpClient, Router],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  pokemonService = inject(PokemonService);
  router = inject(Router);
  
  pokemons: any[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(
      (response: any) => {
        this.pokemons = response;
        console.log(response);
      }
    );
  }

  getImageUrl(index: number): string {
    return this.pokemonService.getImageUrl(index);
  }

  getPokemonDetails(pokemon: any) {
    this.router.navigate(['/details/', pokemon.name]);
  }
}
