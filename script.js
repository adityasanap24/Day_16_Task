const htmlOutParagraph = document.getElementById("output");

//Creating a callback hell
Promise.resolve(10).then((val) =>
  setTimeout(function () {
    htmlOutParagraph.innerHTML = val;
    Promise.resolve(val - 1).then((val) => {
      setTimeout(function () {
        htmlOutParagraph.innerHTML = val;
        Promise.resolve(val - 1).then((val) => {
          setTimeout(function () {
            htmlOutParagraph.innerHTML = val;
            Promise.resolve(val - 1).then((val) => {
              setTimeout(function () {
                htmlOutParagraph.innerHTML = val;
                Promise.resolve(val - 1).then((val) => {
                  setTimeout(function () {
                    htmlOutParagraph.innerHTML = val;
                    Promise.resolve(val - 1).then((val) => {
                      setTimeout(function () {
                        htmlOutParagraph.innerHTML = val;
                        Promise.resolve(val - 1).then((val) => {
                          setTimeout(function () {
                            htmlOutParagraph.innerHTML = val;
                            Promise.resolve(val - 1).then((val) => {
                              setTimeout(function () {
                                htmlOutParagraph.innerHTML = val;
                                Promise.resolve(val - 1).then((val) => {
                                  setTimeout(function () {
                                    htmlOutParagraph.innerHTML = val;
                                    Promise.resolve(val - 1).then((val) => {
                                      setTimeout(function () {
                                        htmlOutParagraph.innerHTML =
                                          "Happy Independance Day";
                                        Promise.resolve(val - 1).then((val) => {
                                          console.log("HBD");
                                        });
                                      }, 1000);
                                    });
                                  }, 1000);
                                });
                              }, 1000);
                            });
                          }, 1000);
                        });
                      }, 1000);
                    });
                  }, 1000);
                });
              }, 1000);
            });
          }, 1000);
        });
      }, 1000);
    });
  }, 1000)
);
