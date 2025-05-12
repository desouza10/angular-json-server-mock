import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from '../../shared/components/pokemon-header/pokemon-header.component';

@Component({
  selector: 'app-details',
  imports: [CommonModule, PokemonHeaderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  route = inject(ActivatedRoute)
  pokemonService = inject(PokemonService)

  pokemon: any;
  pokemonName: any;

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name') || '';
    this.pokemonService.getPokemonByName(this.pokemonName).subscribe(
      (response: any) => {
        this.pokemon = response;
        console.log(this.pokemon)
      }
    )
  }
}
