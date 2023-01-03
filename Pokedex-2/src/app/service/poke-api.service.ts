import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Observable
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  apiGetPokemons(url: any) {
    throw new Error('Method not implemented.');
  }

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50';

  constructor(
    private http: HttpClient
  ) { }
    //status do pokemon
  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap( res => res ),
      tap( res => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe((res: any) => resPokemons.status = res);
        })
      })
    )
  }
  //Details do pokemon
  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}