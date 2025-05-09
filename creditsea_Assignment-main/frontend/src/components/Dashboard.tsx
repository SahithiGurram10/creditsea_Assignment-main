// frontend/src/components/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import { fetchLoans } from '../api';

// Define the type for loan entries
type Loan = {
    _id: string;
    fullName: string;
    loanAmount: number;
    tenure: number;
    status: string; // e.g., 'approved', 'pending', 'rejected'
};

const Dashboard: React.FC = () => {
    const [loans, setLoans] = useState<Loan[]>([]);

    useEffect(() => {
        const loadLoans = async () => {
            try {
                const fetchedLoans = await fetchLoans();
                setLoans(fetchedLoans);
            } catch (error) {
                console.error('Error fetching loans:', error);
            }
        };
        loadLoans();
    }, []);

    // Compute statistics
    const totalApplications = loans.length;
    const totalLoanAmount = loans.reduce((sum, loan) => sum + loan.loanAmount, 0);
    const averageLoanAmount = totalApplications > 0 ? totalLoanAmount / totalApplications : 0;
    const approvedCount = loans.filter(loan => loan.status === 'approved').length;
    const successRate = totalApplications > 0 ? (approvedCount / totalApplications) * 100 : 0;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Loan Dashboard</h2>

            {/* Statistics */}
            <div style={{ marginBottom: '20px' }}>
                <p><strong>Total Applications:</strong> {totalApplications}</p>
                <p><strong>Average Loan Amount:</strong> ${averageLoanAmount.toFixed(2)}</p>
                <p><strong>Approval Success Rate:</strong> {successRate.toFixed(2)}%</p>
            </div>

            {/* Loan List */}
            <ul>
                {loans.map((loan) => (
                    <li key={loan._id}>
                        {loan.fullName} - ${loan.loanAmount} for {loan.tenure} months ({loan.status})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
