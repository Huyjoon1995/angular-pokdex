import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokeModel } from '../pokemon.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() public pokeDetail: PokeModel;
  constructor(public activeModal: NgbActiveModal, private route:ActivatedRoute) { }
  ngOnInit() {
  }
}
