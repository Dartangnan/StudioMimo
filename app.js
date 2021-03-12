//Require modules:
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");
const formidable = require("formidable");

//Set up express app:
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Creating Transporter to send e-mail:
let transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: ENV["E-MAIL"],
    pass: ENV["PASS"],
  },
});

// Get requests:
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/api/upload", (req, res) => {
  res.redirect("/");
});

// Post requests
app.post("/api/upload", (req, res, next) => {
  //Parsing the form
  const form = formidable({ multiples: false });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      next(err);
      return;
    }
    // Getting the form info in fields and files
    console.log(fields, files);
    // Turn object into text
    console.log(JSON.stringify(fields));

    // Creating message
    const dataDeHoje = new Date().toDateString();
    const message = {
      from: ENV["E-MAIL"],
      to: "contatomimostudio@gmail.com",
      subject: `E-Mail do Site - Studio Mimo - ${dataDeHoje}`,
      text: ` -- Informações pessoais: --
      Nome: ${fields.nome}
      Telefone: ${fields.telefone}
      E-mail: ${fields.email}
      Endereço: ${fields.endereco}, ${fields.bairro}, ${fields.cidade}

      -- Informações do Projeto : --

      Tamanho: ${fields.tamanho}
      Data: ${fields.data}
      Cor do fundo: ${fields.corFundo}
      Descrição: ${fields.descricao}
      `,
    };

    //Sending e-mail
    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // redirect to homepage
    res.redirect("/");
  });
});

// Set up server port
app.listen(process.env.PORT || 3000, function () {
  console.log("Server runnin on port 3000.");
});
