// frontend/src/components/LoanForm.tsx

import React, { useState } from 'react';
import { submitLoanApplication } from '../api';

const LoanForm: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [loanAmount, setLoanAmount] = useState(0);
    const [tenure, setTenure] = useState(0);
    const [reason, setReason] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitLoanApplication({ fullName, loanAmount, tenure, reason });
        // Reset form after submission
        setFullName('');
        setLoanAmount(0);
        setTenure(0);
        setReason('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            <input type="number" placeholder="Loan Amount" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} required />
            <input type="number" placeholder="Tenure (months)" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} required />
            <input type="text" placeholder="Reason for Loan" value={reason} onChange={(e) => setReason(e.target.value)} required />
            <button type="submit">Apply for Loan</button>
        </form>
    );
};

export default LoanForm;
