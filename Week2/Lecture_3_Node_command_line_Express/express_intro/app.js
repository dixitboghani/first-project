const express =require('express');

const app = express();

const fs = require('fs');

app.get('/', (req,response) => {


  response.send(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>contact documnet</title>
</head>
<body>
    <h1>Home Page</h1>
</body>
</html>`);
});


app.get('/contact', (req,response) => {

  response.send(`c<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>contact documnet</title>
  </head>
  <body>
      <h1>Contact Page</h1>
  </body>
  </html>`);
})

app.post('/contact', (req,response) => {
const some_json_data = {
  "name": "karma",
  "test": "karma",
  "test2": "karma",
  "test3": "karma",
  "test4": "karma",
  "test5": "karma"
}
  response.send(some_json_data);
})





app.listen(8080);
