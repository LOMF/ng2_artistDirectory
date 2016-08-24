import { Pipe, PipeTransform } from '@angular/core'
import { Artist } from './Artist.interface'
@Pipe({
    name: 'find'
})

export class SearchPipe implements PipeTransform {
    transform(artists: Artist[], pipeModifier): any {
        return artists.filter((eachItem:Artist) => {
            return eachItem.name.toLowerCase().includes(pipeModifier.toLowerCase()) ||
            eachItem.reknown.toLowerCase().includes(pipeModifier.toLowerCase());
        });
    }
}