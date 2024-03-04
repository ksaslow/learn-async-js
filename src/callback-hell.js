function doStep1(init, callback) { // second argument is a function ("callback")
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => { // inside callback arrow function w/in dostep1, we have a call to dostep2
      doStep2(result1, (result2) => { // that function definition has another function definition as the second argument
        doStep3(result2, (result3) => { // this can get super complicated. This nested layers of callbacks can hamper the readability of the code
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();
  