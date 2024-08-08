import cors from 'cors';
import express from 'express';
import { connectToDB } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json("Server is running successfully!");
});

app.post('/data', async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        res.json({
            message: 'Data received successfully',
            data: data
        });
    } catch (error) {
        console.error('Error handling /data POST request:', error);
        res.json({ error: 'An error occurred in try catchblock' });
    }
});

connectToDB(() => {
    app.listen(9000, () => {
        console.log('Server running at http://localhost:9000');
    });
});
