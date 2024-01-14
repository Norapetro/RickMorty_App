import { Component } from '@angular/core';
import { RickService } from '../rick.service';
import { HttpClientModule } from '@angular/common/http';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-hola',
  standalone: true,
  imports: [HttpClientModule],
  providers: [RickService],
  templateUrl: './hola.component.html',
  styleUrl: './hola.component.css'
})
export class HolaComponent {

  constructor(
    private servicio: RickService,
    private observeble: ObservableService,){}


  ngOnInit(): void {
    this.servicio.getPersonajes().subscribe(
      respuesta => {
        console.log(respuesta);
      }
    )

  }

  

}
