/*
REFERENCE: https://www.geeksforgeeks.org/debouncing-in-javascript/

 Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
 that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
 
 If the debounce button is clicked only once, the debounce function gets called after the delay.
 However, if the debounce button is clicked once, and again clicked prior to the end of the delay,
 the initial delay is cleared and a fresh delay timer is started. The clearTimeout function is being used to achieve it.
*/

const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

button.addEventListener('click', debounce(function() {
      // CODE FOR DEBOUNCED FUNCTION
}, 3000));
