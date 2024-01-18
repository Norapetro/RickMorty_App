import { Component, OnInit } from '@angular/core';
import { RickService } from '../rick.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-observador',
  standalone: true,
  imports: [
    CommonModule],
  providers: [RickService],
  templateUrl: './observador.component.html',
  styleUrl: './observador.component.css'
})
export class ObservadorComponent implements OnInit{

  personajes: any;
  constructor(private rickService: RickService){}

  ngOnInit(): void {
    this.rickService.getPersonajes().subscribe(
      resultado => this.personajes = resultado
    )  
  }

}
