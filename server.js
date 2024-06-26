const express = require('express');
const app = express();
const PORT = 3001;

// app.get("/", (req, res) => {
//     res.send("Welcome to the fruit homepage");
// });

app.get("/", (req,res) => {
    res.send({
  "fruits": [
    {
      "name": "strawberries",
      "color": "red",
      "quantity": 12,
      "img": "https://static.vecteezy.com/system/resources/previews/010/225/631/original/strawberry-fruit-2d-illustration-png.png",
        'type': 'basic'
    },
    {
      "name": "pears",
      "color": "green",
      "quantity": 5,
      "img": "https://static.vecteezy.com/system/resources/previews/009/597/281/original/pear-fruit-illustration-cartoon-png.png"
    },
    {
      "name": "blueberries",
      "color": "blue",
      "quantity": 52,
      "img": "https://static.vecteezy.com/system/resources/previews/009/303/170/original/blueberry-clipart-design-illustration-free-png.png"
    },
    {
      "name": "grapes",
      "color": "red",
      "quantity": 53,
      "img": "https://static.vecteezy.com/system/resources/previews/009/597/067/original/grape-fruit-illustration-cartoon-png.png"
    }
  ]
})
})
app.listen(PORT, () => {
    console.log("Server is up and running on PORT: " + PORT);
});

module.exports = app;
