import express from 'express';
import { analyzeCrop } from './controllers/cropController.js';

const app = express();
app.use(express.json());

app.post('/analyze', (req, res) => {
    const { leafFeatures, cropType, area } = req.body;

    const result = analyzeCrop(leafFeatures, cropType, area);

    res.json(result);
});

app.listen(3000, () => console.log('Server running on port 3000'));
