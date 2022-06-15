import { Component, OnInit } from '@angular/core';
import { from, interval, mergeMap, switchMap, zip } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-affluences';

  getCurrentCity = () => {
    /* Produce one value from the array every second. */
    return zip(
        from(['Strasbourg', 'Paris', 'Lyon']),
        interval(1000)
    )
        .pipe(map(([city]) => city));
  };

  getTemperature = (city: string) => {
      /* Produce the same temperature per city every 500ms. */
      return interval(500)
          .pipe(map(() => 100 / city.length));
};

  ngOnInit() {
    // this.getCurrentCity().subscribe((city : string) => console.log(city));
    // this.getTemperature('Lyon').subscribe(temperature => console.log(temperature));

    // const currentCityTemperature$ = this.getCurrentCity()
    // .pipe(switchMap(city => this.getTemperature(city)));

    // currentCityTemperature$
    //     .subscribe(temperature => console.log(temperature));

    // const getTemperature = (city : string) => 100 / city.length;

    // /* Create an Observable from an array : Strasbourg => Nice => Lyon. */
    // const city$ = from(['Strasbourg', 'Nice', 'Lyon']);

    // const temperature$ = city$
    //     .pipe(map(city => getTemperature(city)));

    // temperature$.subscribe(temperature => console.log(temperature));
  }
}
