/*
The `visibilitychange` event is fired at document when contents of its tab have become visible or have been hidden.

`visibilityState` is "hidden", when page is BACKGROUND tab or part of a MINIMIZED window, or OS SCREEN LOCK is active
i.e. a user navigates to a new page, switches tabs, closes tab, minimizes or closes the browser, or switches from browser to a different app. 

`visibilityState` is "visible", when page is FOREGROUND tab of a NON-MINIMIZED window.

NOTE: What is the difference between document.hasFocus() and checking document.visibilityState?
Something can be visible but it may not have focus.
There can be documents inside a document i.e. iframes etc.
*/
/* 1 */
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
});

/* 2 */
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});
