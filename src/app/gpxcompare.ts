import {Component} from 'angular2/core';


@Component({
  selector: 'gpxcompare-app',
  providers: [],
  templateUrl: 'app/gpxcompare.html',
  directives: [],
  pipes: []
})
export class GpxcompareApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
