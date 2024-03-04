const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');

    // This is: PROMISE CHAINING!!! 
    // allows us to chain together promises, especially there are dependencies between the promises! 
    // notice: no NESTED layers of then blocks.
    // instead: we have a chain of then blocks

    // above: we chain together then blocks sequentially. This is slightly better than the nested
    // promises and then blocks and callback hell. 