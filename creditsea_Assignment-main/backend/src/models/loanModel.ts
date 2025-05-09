// backend/src/models/loanModel.ts

import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    tenure: { type: Number, required: true },
    reason: { type: String, required: true },
}, { timestamps: true });

const Loan = mongoose.model('Loan', loanSchema);
export default Loan;
