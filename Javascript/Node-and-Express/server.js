import express from 'express';


const app = express();
const PORT = 11000;

app.get('/', (req, res) => {
    res.send('Hello from Express server!');
});

app.listen(PORT, () => {
    console.log(`Express server is running on http://localhost:${PORT}`);
}); 