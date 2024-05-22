const express = require('express');
const axios = require('axios');

const app = express();
const jsonServerUrl = 'http://localhost:3000'; // URL onde o JSON Server está rodando

// Rota para listar todos os produtos
app.get('/produtos', async (req, res) => {
  try {
    const response = await axios.get(`${jsonServerUrl}/produtos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
});

// Iniciar o servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});