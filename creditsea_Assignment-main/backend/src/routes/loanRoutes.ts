// backend/src/routes/loanRoutes.ts

import express from 'express';
import { applyForLoan, getLoans } from '../controllers/loanController';

const router = express.Router();

router.post('/', applyForLoan);
router.get('/', getLoans);

export default router;
