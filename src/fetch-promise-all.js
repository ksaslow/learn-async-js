const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]) // Promise.all() expects a LIST of PROMISES that must be executed concurrently!
    .then((responses) => {
      for (const response of responses) {
        // if we want to retreive the responses from al these promises, we would need to CHAIN the responses (2 then blocks!)
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });
  