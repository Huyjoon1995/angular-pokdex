import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokeModel } from '../pokemon.model';
import { Subscription } from 'rxjs';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-alola',
  templateUrl: './alola.component.html',
  styleUrls: ['./alola.component.css']
})
export class AlolaComponent implements OnInit {
  pokemonAlolaArray: PokeModel[] = [];
  userInput: string = '';
  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/?limit=807';
  pokeDescriptionUrl: string = 'https://pokeapi.co/api/v2/pokemon-species/';
  pokemonSubscription: Subscription;
  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.pokemonSubscription = this.http.get(this.apiUrl).subscribe(
      (res) => {
         let resSTR = JSON.stringify(res);
         let resJSON = JSON.parse(resSTR);
         this.pokemonAlolaArray = resJSON.results.filter((item: { name: string; url: string; }, index: number) => {
            if (index > 720) {
              return new PokeModel(item.name, item.url);
            }
          });
          
         for(const item of this.pokemonAlolaArray) {
           this.http.get(item.url).subscribe(responseData => {
             let resSTR = JSON.stringify(responseData);
             let resJSON = JSON.parse(resSTR);
             item.type = [];
             for(const type of resJSON['types']) {
                item.type.push(String(type.type.name));
             }
             if (resJSON['sprites']['front_default'] != null) {
                item.sprite = resJSON['sprites']['front_default'];
             } else {
              item.sprite = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrNvOVvgTYfkFbqM1e_ius8q_4Agve01hIyMGGR9EgyUMtAWQ";
             }
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
  ngOnDestroy() {
    this.pokemonSubscription.unsubscribe();
  }
  ngAfterViewInit() {
  
  }
  open(index: number) {
    const modalRef = this.modalService.open(PokemonDetailComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.pokeDetail = this.pokemonAlolaArray[index];
  }
}
