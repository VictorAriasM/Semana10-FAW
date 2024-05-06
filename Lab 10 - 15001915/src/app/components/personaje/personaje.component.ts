import { Component, Input } from '@angular/core';
import { RAMPersonaje } from '../../models/response/RAMResponse';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.scss'
})
export class PersonajeComponent {
  @Input() personaje: RAMPersonaje = new RAMPersonaje();
}
