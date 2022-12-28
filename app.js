const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));  //normal static pages
app.set('view engine', 'ejs');     //to use ejs in views folder

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

})

app.get("/name", function(req, res) {
  const mName = req.body.Minion;
  res.render('name', {mName: mName });
})

app.post("/", function(req, res) {
      const english = req.body.English;

      const data = {
        text: english,
        translation: 'minion'
      }

      const jsonData = JSON.stringify(data);

      const url = "https://api.funtranslations.com/translate/minion.json";

      const options = {
        method: "post",
      }

      const request = https.request(url, options, function(response) {
        response.on("data", function(data) {
          const minionData = JSON.parse(data);
          console.log(minionData);
          const banana = minionData.contents.translated;
          console.log(banana);
          res.render('minion', {banana: banana });
        })

      })

      request.write(jsonData);
      request.end();


      })


    app.post("/minion", function(req, res) {
      res.redirect("/");
    })

    app.post("/name", function(req, res) {
      const mName = req.body.Minion;
      res.render('name', {mName: mName });
      res.redirect("/");
    })




    app.listen(3000 , function() {
      console.log("this is port 3000.");
    })
