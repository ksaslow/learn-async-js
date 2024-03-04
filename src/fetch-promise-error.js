const fetchPromise = fetch(
    "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(`Bad Response : ${response.status}`) 
    })
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
        })
    .catch((error) => {
        console.error(`Failed to get products: ${error}`); 
        // note: the catch block ALSO runs asynchronously!! Which is why when we execute this, we see
        // "Chaining promises ..." first, then the error message AFTER!
    });

    console.log('Chaining promises ... ');
  