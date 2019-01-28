import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public store(name: string, o: any) {
    localStorage.setItem(name, JSON.stringify(o));
  }
}
