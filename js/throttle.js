/*
REFERENCE: https://towardsdev.com/debouncing-and-throttling-in-javascript-8862efe2b563

To throttle a function means to ensure that the function is called at most once in a specified time period (for instance, once every 10 seconds).
This means throttling will prevent a function from running if it has run “recently”.
Throttling also ensures a function is run regularly at a fixed rate.
Throttling is used to call a function after every millisecond or a particular interval of time, only the first click is executed immediately.

A variable lastRan which is a timestamp of the last invocation. We can then use this to determine if the last invocation took place within the throttle limit.
We can also use lastRan to determine whether the throttled function has ran at all. This makes the previous variable inThrottle redundant.

An application of throttling is in content-loading webpages like Facebook and Twitter where the user keeps on scrolling.
In these scenarios, if the scroll event is fired too frequently, there might be a performance impact,
as it contains lots of videos and images. Thus the scroll event must make use of throttling.
*/

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
       }, limit - (Date.now() - lastRan));
    }
  }
}
