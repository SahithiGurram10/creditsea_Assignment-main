// backend/src/app.ts

import express from 'express';
import mongoose from 'mongoose';
import loanRoutes from './routes/loanRoutes';
import errorMiddleware from './middleware/errorMiddleware';
import connectDB from './config/db';

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/loans', loanRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
