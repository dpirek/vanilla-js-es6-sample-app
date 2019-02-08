import {listUsers} from "./views/user.js";
import {userList} from './services/user.js';
import {renderDash} from "./views/dash.js";
import {onChange} from "./lib/observer.js";

const state = {
  users: []
};

const proxy = onChange(state, function() {
  setTimeout(function () {
    listUsers(state.users)
  }, 0);
});

userList(function(list) {
  proxy.users = list;
});

function getHash() {
  return window.location.hash.replace('#', '');
}

function navigate(hash) {
  if (hash === 'users') {
    listUsers(state.users);
  } else if (hash === 'dash') {
    renderDash();
  } else {
    renderDash();
  }
}

window.onhashchange = function() {
  navigate(getHash());
};

navigate(getHash());
