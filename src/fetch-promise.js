const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  ); 
  // it returns a promise so that our synchronous execution carries on after the request is made
  // then the fetch runs aysnchronously and the promise is resolved when the request is complete!

  // attach HANDLERS to promise to do other stuff while waiting for promise to complete!
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
  });
  
  console.log("Started request…"); // here: the main thread is over. Synchronous execution is complete post Promise. 
                                  // the then block is triggered once the Promise is no longer pending!!!
                                  // Received response? and Response status (everything in 11-13) executes
                                  // OUTSIDE of the main thread. Outside of the browser. Handled asynchronously.
  