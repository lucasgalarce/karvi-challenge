import express from 'express';

// Routes
import IndexRoutes from './routes';
import CarsRoutes from './routes/cars';

// Initializations
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(IndexRoutes)
app.use('/api/cars', CarsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Server on port: ' + PORT);
});