/** @jsx h */

const {Component, h} = require("preact");

// const HTML = require("./html");
const Australia = require("./australia");
const World = require("./world");

const styles = require("./app.scss").default;


class App extends Component {
  render() {
      const { type } = this.props;

      if (type === "australia") {
          return <Australia  />;
      } else {
          return <World />;
      }
  }
}

module.exports = App;
