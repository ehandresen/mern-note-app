import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hellooooo Wooooorld!');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

// mongoDBpass: dsoqNHjIXP7ueiTh
// mongodb+srv://ehandresen:dsoqNHjIXP7ueiTh@cluster0.mhoiteg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://ehandresen:<password>@cluster0.mhoiteg.mongodb.net/
