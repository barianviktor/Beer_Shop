import { catchError, Observable, of, switchMap } from 'rxjs';
import { BeerService } from './../../../../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { IBeer } from 'src/app/interfaces/beer.interface';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
  beer$: Observable<IBeer>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private beerService: BeerService
  ) {
    this.beer$ = this.route.params.pipe(
      switchMap((params: Params) => this.beerService.getBeer$(params['id'])),
      catchError((err) => {
        this.router.navigate(['/']);
        throw err;
      })
    );
  }

  ngOnInit(): void {}
}
