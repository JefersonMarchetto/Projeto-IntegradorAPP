const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

console.log('Env Variables:', process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_DATABASE);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/api/pessoas/search', (req, res) => {
    const { nome, cpf, endereco, data_nascimento, cargo } = req.query;
    let query = 'SELECT * FROM pessoas WHERE 1=1';
    const params = [];

    if (nome) {
        query += ' AND nome LIKE ?';
        params.push(`%${nome}%`);
    }
    if (cpf) {
        query += ' AND cpf LIKE ?';
        params.push(`%${cpf}%`);
    }
    if (endereco) {
        query += ' AND endereco LIKE ?';
        params.push(`%${endereco}%`);
    }
    if (data_nascimento) {
        query += ' AND data_nascimento LIKE ?';
        params.push(`%${data_nascimento}%`);
    }
    if (cargo) {
        query += ' AND cargo LIKE ?';
        params.push(`%${cargo}%`);
    }

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error('Erro ao buscar pessoas:', err);
            res.status(500).send('Erro ao buscar pessoas');
        } else {
            res.json(results);
        }
    });
});


app.post('/api/pessoas', (req, res) => {
  const { nome, cpf, endereco, data_nascimento, cargo } = req.body;
  console.log('Recebido no backend:', req.body);
  const sql = 'INSERT INTO pessoas (nome, cpf, endereco, data_nascimento, cargo) VALUES (?, ?, ?, ?, ?)';
  connection.query(sql, [nome, cpf, endereco, data_nascimento, cargo], (err, result) => {
    if (err) {
      console.error('Erro ao inserir no banco:', err);
      res.status(500).send('Erro ao inserir no banco de dados');
      return;
    }
    console.log('Inserção bem-sucedida:', result);
    res.status(201).send('Pessoa adicionada com sucesso');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
