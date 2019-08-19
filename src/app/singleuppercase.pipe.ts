import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'single'
})
export class SingleWordUpperCasePipe implements PipeTransform {
    transform(word: string) {
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

}