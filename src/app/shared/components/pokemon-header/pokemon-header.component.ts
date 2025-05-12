import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-header',
  imports: [CommonModule],
  standalone: true,
  providers: [Router],
  templateUrl: './pokemon-header.component.html',
  styleUrl: './pokemon-header.component.scss'
})
export class PokemonHeaderComponent {
 @Input() showBackButton = false;

  router = inject(Router);

  goBack(): void {
    this.router.navigate(['']);
  }
}
