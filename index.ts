import {
  fromEvent,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

//#region Hello World
// Import fromEvent method to create Observable

// Create an observable with click event
var observable = fromEvent(window, 'click');
let count = 0;

//types of callbacks...
var observer = {
  next: () => {
    console.log(`Hey! You clicked the window ${++count} times`);
  },
  error: (err: TypeError) => console.log(err),
  complete: () => console.log('No more data in stream'),
};

// Subscribe to the observable
observable.subscribe(observer);

//#endregion

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
// const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

// subject.next(5);
//#endregion

//#region  Async Subject
// const subject = new AsyncSubject();

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

// subject.next(5);
// subject.complete();
//#endregion
