import {render} from "../lib/render.js";
import "../components/user.js";

function dash(list) {

  function test() {
    return 'foo';
  }

  render(`
    <h1>Dash</h1>
    <hr />
    ${test()}
    <user-widget data-user-name="dave"></user-widget>
  `);
}

function renderDash() {
  dash();
}

export {
  renderDash
};
