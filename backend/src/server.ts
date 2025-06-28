import express from 'express';
import apiRouterV1 from './routes/index';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1', apiRouterV1);

app.get('/healthcheck', (_req, res) => {
  res.send('Hello from Express using TypeScript!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
