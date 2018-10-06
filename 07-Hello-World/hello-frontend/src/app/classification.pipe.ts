import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classification'
})
export class ClassificationPipe implements PipeTransform {

  displayNames = { neu: 'Neutral', pos: 'Positive', neg: 'Negative' };
  displayClasses = { neu: 'secondary', pos: 'success', neg: 'danger' };

  transform(value: any, type: string = 'disp'): any {  
    return 'disp' === type ? this.displayNames[value]:this.displayClasses[value];
  }

}
