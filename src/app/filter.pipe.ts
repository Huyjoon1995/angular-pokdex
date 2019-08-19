import { Pipe, PipeTransform } from '@angular/core';
import { PokeModel } from './pokemon.model';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(pokemonObject: PokeModel[], filterString: string): any {
    return pokemonObject.filter(pokemon => pokemon.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1);
  }
}
