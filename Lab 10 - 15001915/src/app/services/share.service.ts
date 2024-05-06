import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RAMPersonaje } from '../models/response/RAMResponse';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private _currentPage = new BehaviorSubject<number>(1);
  private _personaje = new BehaviorSubject<Array<RAMPersonaje>>([]);
  currentPage = this._currentPage.asObservable()
  personaje = this._personaje.asObservable();

  constructor() { }

  setNewPage(page: number) {
    this._currentPage.next(page);
  }

  setCurrentPersonaje(personaje: RAMPersonaje) {
    let array: Array<RAMPersonaje> = this._personaje.getValue();
    array.push(personaje);
    this._personaje.next(array);
  }

}
