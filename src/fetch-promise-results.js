const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json(); // we take the response and call json on it 
  jsonPromise.then((products) => { // this then gives us another PROMISE! (executes asynchronously)!!!
    products.forEach(product => {
      console.log(product.name);
    });
  });
});

console.log('Fetching products ... ');

// see THEN BLOCK to HANDLE the promise!!!

// this still gives us the callback hell problem. 
// Instead, we will make a chain of promises in a more elegant way!