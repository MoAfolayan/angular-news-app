import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeHtmlTags'
})
export class RemoveHtmlTagsPipe implements PipeTransform {

    transform(value?: string): string | undefined {
        return value?.replace(/<[a-z][\s\S]*>/i, '');
    }

}
