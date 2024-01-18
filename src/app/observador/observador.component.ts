import { Component, OnInit } from '@angular/core';
import { RickService } from '../rick.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observador',
  standalone: true,
  imports: [CommonModule],
  providers: [RickService],
  templateUrl: './observador.component.html',
  styleUrl: './observador.component.css'
})
export class ObservadorComponent implements OnInit {
  personajes: any;
  paginaActual: number = 1;

  constructor(private rickService: RickService) {}

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.rickService.getPersonajes(this.paginaActual).subscribe(
      (resultado) => {
        if (!this.personajes) {
          this.personajes = resultado;
        } else {
          // Si ya hay personajes, concatenar los nuevos resultados
          this.personajes.results = this.personajes.results.concat(
            resultado.results
          );
        }
      }
    );
  }

  cargarMasPersonajes() {
    this.paginaActual++;
    this.cargarPersonajes();
  }
}
