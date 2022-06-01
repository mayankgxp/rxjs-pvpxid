import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

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
// const subject = new BehaviorSubject(0); // 0 is the initial value

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

// subject.next(3);
//#endregion

//#region Replay Subject
const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(5);
//#endregion
