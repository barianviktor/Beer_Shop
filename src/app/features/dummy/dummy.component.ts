import { catchError, Observable, of } from 'rxjs';
import { BeerService } from './../../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { IBeerSearchCard } from 'src/app/interfaces/beer-search-card.interface';
import { IBeer } from 'src/app/interfaces/beer.interface';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  beer$: Observable<IBeer>;
  beerSearchCard$: Observable<IBeerSearchCard>;
  constructor(private beerService: BeerService) {
    this.beer$ = this.beerService.getBeer$(1).pipe(
      catchError((err) => {
        console.log('problem?');

        throw 'error in source. Details: ' + err;
      })
    );
    this.beerSearchCard$ = this.beerService.getBeerSearchCard$(1);
  }

  ngOnInit(): void {}
}
