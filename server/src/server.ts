import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// METODOS HTTP:
// GET: Buscar/Listar uma informação
// POST: Criar uma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// PARAMETROS
// Corpo (Request Body): Dados para criação ou atualização de um regitro
// Route Params: Identificar qual recurso quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação
