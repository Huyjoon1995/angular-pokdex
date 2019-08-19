import { Component, OnInit, OnDestroy, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeModel } from '../pokemon.model';
import { Subscription, Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css'],
})

export class KantoComponent implements OnInit, OnDestroy, AfterViewInit {
  pokemonKantoArray: PokeModel[] = [];
  userInput: string = '';
  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  pokeDescriptionUrl: string = 'https://pokeapi.co/api/v2/pokemon-species/';
  pokemonSubscription : Subscription;
  destroy = new Subject<any>();  
  currentDialog = null
  constructor(private http: HttpClient, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
   this.pokemonSubscription = this.http.get(this.apiUrl).subscribe(
      (res) => {
          let resSTR = JSON.stringify(res);
          let resJSON = JSON.parse(resSTR);
          this.pokemonKantoArray = resJSON.results.map((item: { name: string; url: string; })=> {
            return new PokeModel(item.name, item.url);
          });
          for(const item of this.pokemonKantoArray) {
            this.http.get(item.url).subscribe(responseData => {
              let resSTR = JSON.stringify(responseData);
              let resJSON = JSON.parse(resSTR);
              item.type = [];
              for(const type of resJSON['types']) {
                item.type.push(String(type.type.name));
              }
              item.sprite = resJSON['sprites']['front_default'];
              item.number = resJSON['id'];
              item.height = resJSON['height'] / 10;
              item.weight = resJSON['weight'] / 10;
              this.http.get(this.pokeDescriptionUrl + item.number).subscribe(detailData => {
                let resSTR = JSON.stringify(detailData);
                let resJSON = JSON.parse(resSTR);
                for(const text of resJSON['flavor_text_entries']) {
                  if(text.language.name === 'en') {
                    item.description = text.flavor_text;
                  }
                }
              });
            });
          }
  
      }
    );
  }

  ngAfterViewInit() {
  
  }
  open(index: number) {
    const modalRef = this.modalService.open(PokemonDetailComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.pokeDetail = this.pokemonKantoArray[index];
  }
  ngOnDestroy() {
    this.pokemonSubscription.unsubscribe();
  }
}
