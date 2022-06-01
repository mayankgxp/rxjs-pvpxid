import { Subject, BehaviorSubject } from 'rxjs';

//#region  Subject...
  // const subject = new Subject<number>();

  // subject.subscribe({
  //   next: (v) => console.log(`observerA: ${v}`),
  // });
  // subject.subscribe({
  //   next: (v) => console.log(`observerB: ${v}`),
  // });

  // subject.next(1);
  // subject.next(2);
//#endregion

//#region  Behavioral Subject
const subject = new BehaviorSubject(0); // 0 is the initial value

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(3);
//#endregion
