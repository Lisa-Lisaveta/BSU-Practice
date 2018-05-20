const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const funcs = require('./lizzy');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postsPath = './server/data/posts.json';

app.post('/posts', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync(postsPath));
  const { skip, top } = req.query;
  const result = funcs.getPhotoPosts(
    skip ? Number(skip) : undefined,
    top ? Number(top) : undefined,
    req.body === undefined || req.body === null ? undefined : req.body, photoPosts,
  );
  if (result) {
    res.status(200).send(JSON.stringify(result));
  } else {
    res.status(400).end();
  }
});

app.get('/post', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync(postsPath));
  const result = funcs.getPhotoPost(req.query.id, photoPosts);
  if (result) {
    res.status(200).send(JSON.stringify(result));
  } else {
    res.status(400).end();
  }
});

app.delete('/delete', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync(postsPath));
  const result = funcs.removePhotoPost(req.query.id, photoPosts);
  if (result) {
    fs.writeFileSync(postsPath, JSON.stringify(result));
    res.status(200).send('true');
  } else {
    res.status(400).send('false');
  }
});

app.post('/add', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync(postsPath));
  const result = funcs.addPhotoPost(req.body, photoPosts);
  if (result) {
    fs.writeFileSync(postsPath, JSON.stringify(result));
    res.status(200).send('true');
  } else {
    res.status(400).send('false');
  }
});

app.put('/edit', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync(postsPath));
  const result = funcs.editPhotoPost(req.query.id, req.body, photoPosts);
  if (result) {
    fs.writeFileSync(postsPath, JSON.stringify(result));
    res.status(200).send('true');
  } else {
    res.status(400).send('false');
  }
});

app.listen(1984, () => {
  console.log('listening on port 1984');
});
