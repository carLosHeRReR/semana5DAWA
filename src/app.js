const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));

//cambios para la configuracion de la pagina

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;
