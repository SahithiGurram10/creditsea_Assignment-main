// backend/src/controllers/loanController.ts

import { Request, Response } from 'express';
import Loan from '../models/loanModel';
import asyncHandler from '../middleware/asyncHandler';

export const applyForLoan = asyncHandler(async (req: Request, res: Response) => {
    const { fullName, loanAmount, tenure, reason } = req.body;

    const newLoan = new Loan({
        fullName,
        loanAmount,
        tenure,
        reason,
    });

    await newLoan.save();
    res.status(201).json({ message: 'Loan application submitted successfully', loan: newLoan });
});

export const getLoans = asyncHandler(async (req: Request, res: Response) => {
    const loans = await Loan.find();
    res.status(200).json(loans);
});
