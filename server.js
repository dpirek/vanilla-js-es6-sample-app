const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const staticPath = './app';

let userList = [
  {name: 'dave'},
  {name: 'mike'},
  {name: 'paul'},
  {name: 'jane'}
];

app.use(express.static(staticPath));

app.get('/api/user/list', function(req, res) {
  res.json(userList);
});

app.delete('/api/user/:user', function(req, res) {
  const name = req.params.user;

  userList.forEach((item, index) => {
    if(item.name === name) {
      userList.splice(index, 1);
    }
  });

  res.json({message: name + ' was deleted'});
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
