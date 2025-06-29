import express from 'express'; 
import dotenv from 'dotenv';

const app = express();

dotenv.config();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Backend API Server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})