import { Component, OnInit } from '@angular/core';
import { PersonajeComponent } from '../personaje/personaje.component';
import { ShareService } from '../../services/share.service';
import { RAMPersonaje, RAMResponse } from '../../models/response/RAMResponse';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [PersonajeComponent, HttpClientModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss',
})
export class ListadoComponent implements OnInit {
  private baseURL = 'https://futuramaapi.com/api';
  respuesta: RAMResponse = new RAMResponse([]);
  currentPage: number = 1;
  lastPage: number = 0;
  cp: Array<RAMPersonaje> = [];
  constructor(private share: ShareService, private http: HttpClient) {}

  ngOnInit(): void {
    this.share.personaje.subscribe((p) => {
      this.cp = p;
    });
    this.share.currentPage.subscribe((page) => {
      this.currentPage = page;
      console.log(`currentPage : ${this.currentPage}`);
      this.getPersonajes(this.currentPage).subscribe((data) => {
        this.lastPage = data.pages;
        this.respuesta = data;
      });
    });
  }

  getPersonajes(pagina: number) {
    return this.http.get<RAMResponse>(
      `${this.baseURL}/characters?page=${pagina}`
    );
  }

  backPage() {
    if (this.currentPage > 1) {
      console.log(`${this.currentPage - 1}`);
      this.share.setNewPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.lastPage) {
      console.log(`${this.currentPage + 1}`);
      this.share.setNewPage(this.currentPage + 1);
    }
  }

  setCurrentPersonaje(p: RAMPersonaje) {
    this.share.setCurrentPersonaje(p);
  }
}
