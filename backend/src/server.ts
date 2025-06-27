
import express from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (_req, res) => {
  res.send('Hello from Express using TypeScript!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
