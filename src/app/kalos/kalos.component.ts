import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokeModel } from '../pokemon.model';
import { Subscription } from 'rxjs';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-kalos',
  templateUrl: './kalos.component.html',
  styleUrls: ['./kalos.component.css']
})
export class KalosComponent implements OnInit {
  pokemonKalosArray: PokeModel[] = [];
  userInput: string = "";
  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/?limit=718';
  pokeDescriptionUrl: string = 'https://pokeapi.co/api/v2/pokemon-species/';
  pokemonSubscription: Subscription;
  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.pokemonSubscription = this.http.get(this.apiUrl).subscribe(
      (res) => {
         let resSTR = JSON.stringify(res);
         let resJSON = JSON.parse(resSTR);
         this.pokemonKalosArray = resJSON.results.filter((item: { name: string; url: string; }, index: number) => {
            if (index > 648) {
              return new PokeModel(item.name, item.url);
            }
          });
          
         for(const item of this.pokemonKalosArray) {
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
         console.log(this.pokemonKalosArray);
      }
    );
  }
  ngOnDestroy() {
    this.pokemonSubscription.unsubscribe();
  }
  ngAfterViewInit() {
  
  }
  open(index: number) {
    const modalRef = this.modalService.open(PokemonDetailComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.pokeDetail = this.pokemonKalosArray[index];
  }
} 
