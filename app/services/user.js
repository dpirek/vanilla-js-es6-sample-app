function userList(callBack) {
  fetch('/api/user/list', {
      method: 'GET'
  }).then(res => {
    return res.json();
  }).then(d => {
    callBack(d);
  }).catch(err => {
    console.error(err);
  });
}

function deleteUser(name, callBack) {
  fetch('/api/user/' + name, {
      method: 'DELETE'
  }).then(res => {
    return res.json();
  }).then(d => {
    callBack(d);
  }).catch(err => {
    console.error(err);
  });
}

export {
  userList,
  deleteUser
}
