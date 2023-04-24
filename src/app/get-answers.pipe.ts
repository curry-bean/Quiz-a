import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAnswers'
})
export class GetAnswersPipe implements PipeTransform {

  transform(objects : any = []): unknown {
    return Object.values(objects);
  }
  

}
