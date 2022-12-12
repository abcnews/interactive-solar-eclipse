/** @jsx h */

import { h, render } from "preact";

const init = () => {
  const elemNameAustralia = document.querySelector("#australiamap");
  const elementWorld = document.querySelector("#worldmap");

  attach(elemNameAustralia, "australia");
  attach(elementWorld, "world");
};

let attach = (element, type) => {
  let App = require("./components/app");
  render(<App type={type} />, element);
};

// Do some hot reload magic with errors
if (process.env.NODE_ENV !== "production" && module.hot) {
  // Wrap the actual renderer in an error trap
  let renderFunction = attach;
  attach = (element, type) => {
    try {
      renderFunction(element, type);
    } catch (e) {
      // Render the error to the screen in place of the actual app
      console.log(e);
    }
  };

  // If a new app build is detected try rendering it
  module.hot.accept("./components/app", () => {
    setTimeout(init);
  });
}

// Load when Odyssey is ready
if (window.__ODYSSEY__) {
  init();
} else {
  window.addEventListener("odyssey:api", () => {
    init();
  });
}
