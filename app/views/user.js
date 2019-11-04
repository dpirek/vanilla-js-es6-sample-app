import {render, context} from '../lib/render.js';
import '../components/user.js';
import {userList, deleteUser} from '../services/user.js';

function listUsers(list) {
  let elm = context(`
    <h1>Users</h1>
    <hr />
    <div class="container-fluid">
    ${list.map((item, i) => `
      <div class="row">
        <user-widget class="col-1" data-user-name="${item.name}"></user-widget>
        <div class="col-9">
          ${item.name}</br>
        </div>
        <div class="col-2">
          <a href="#" class="btn btn-danger btn-sm" data-id="${item.name}">delete</a>
        </div>
      </div>
    `).join('')}
    </div>
  `);

  elm.querySelectorAll('.btn').forEach(function (node) {
    node.addEventListener('click', function () {
      let domItem = this.parentNode.parentNode;

      deleteUser(this.dataset.id, function () {
        domItem.remove();
      });

      return false;
    })
  });

  render(elm);
}

function userDetail(userName) {
  let elm = context(`
    <h1>User Profile: ${userName}</h1>
    <hr />
    <div class="container-fluid">
      <user-widget class="col-1" data-user-name="${userName}"></user-widget>
    </div>
  `);

  render(elm);
}

export {
  listUsers,
  userDetail
};
