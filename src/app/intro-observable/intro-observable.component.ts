import { Component, OnInit } from '@angular/core';
import { filter, last, map, Observable, Observer, range } from 'rxjs';

@Component({
  selector: 'app-intro-observable',
  templateUrl: './intro-observable.component.html',
  styleUrls: ['./intro-observable.component.css']
})
export class IntroObservableComponent implements OnInit {
  
  ngOnInit(): void {
    this.greenMouse().subscribe({
      next(elt: string) { console.log(elt); },
      error(error) { console.log(error); },
      complete() { console.log("end of the flow")}
    });

    this.rangeValeurs(5, 25).subscribe(console.log);

    console.log("----------- Only even numbers ----------")
    this.rangeValeurs(5, 25).pipe(
      filter((elt) => elt%2 == 0)
    ).subscribe((console.log));

    console.log("----------- Only odd numberso which we applied : odd * 2 + 1 ----------");
    this.rangeValeurs(5, 25).pipe(
      filter(elt => elt % 2 == 1),
      map(elt => elt * 2 + 1),
    ).subscribe((console.log));

    console.log("----------- fibonacci the 20 firsts ----------");
    this.fibonacci(20).subscribe(console.log);
    console.log("----------- fibonacci the 50th ----------");
    this.fibonacci(50).pipe(last()).subscribe(console.log);
  }

  /**
   * Function which returns an Observable<string> of green mouse's lyrics.
   * @returns Observable<string>
   */
  greenMouse(): Observable<string> {

    const words: string[] = [
      "A green mouse",
      "Who ran in the grass",
      "I catch her by the tail",
      "I show it to these gentlemen",
      "These gentlemen tell me:",
      "\"Dip it in oil",
      "Dip it in water",
      "It will make a snail...",
      "All hot!\""
    ];

    const greenMouse$ = new Observable((observer: Observer<string>) => {
      words.forEach((line) => {
        observer.next(line);
      });
      observer.complete();
    });

    return greenMouse$;
  }

  /**
   * Function which returns an Observable<number> of integers included in a range of values given in function parameters.
   * @param lv Less value
   * @param hv High value
   * @returns Observable<number>
   */
  rangeValeurs(lv: number, hv: number): Observable<number> {
    return range(lv, hv-lv+1);
  }

  fibonacci(n: number): Observable<number> {
    const fibonacci$ = new Observable<number>(observer => {
        if (n == 0) {
          observer.next(0);
        } else if (n == 1) {
          observer.next(0);
          observer.next(1);
        } else {
          let fn_2 = 0;
          let fn_1 = 1;
          let fn = 0;
          observer.next(0);
          observer.next(1);
          for (let i = 2; i <= n; i++) {
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;
            observer.next(fn);
          }
          observer.complete();
        }
        observer.complete();

      }

    );
    return fibonacci$;
  }

}
