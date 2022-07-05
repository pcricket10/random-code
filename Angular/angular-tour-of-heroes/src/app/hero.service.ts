import { Injectable } from '@angular/core';
import { catchError, map, tap, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  private heroesUrl = 'api/heroes';
  private log(message: string) {
    this.messageService.add(`HeroService" ${message}`);
  }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h=>h.id === id)!;
    this.messageService.add(`heroService: fetched hero id=${id}`)
    return of(hero);
  }
}
