/* To see changes in the network state,
   use addEventListener to listen for the events on `window.online` and `window.offline`
   NOTE: These events work on `window` and NOT on document.
*/
/* changed to ONLINE state */
window.addEventListener("online", (evt) => {
    console.log(evt);
});

/* changed to OFFLINE state */
window.addEventListener("offline", (evt) => {
    console.log(evt);
});
