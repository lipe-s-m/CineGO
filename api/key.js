// import express from 'express';
import 'dotenv/config';
import express from 'express';

// // Carregar variáveis de ambiente
// dotenv.config();

const app = express();
const port = 3001;
console.log(process.env.API_KEY);

app.get('api/key', (req, res) => {
  if (!process.env.API_KEY) {
    console.log('tp aq');

    return res.status(500).json({ error: 'API key not found!' });
  }
  console.log(process.env.API_KEY);

  res.json({ apiKey: process.env.API_KEY });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
