import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ObservableService } from '../observable.service';
import { RickService } from '../rick.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-observador',
  standalone: true,
  imports: [MatProgressSpinnerModule,MatCardModule, MatButtonModule, HttpClientModule],
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
