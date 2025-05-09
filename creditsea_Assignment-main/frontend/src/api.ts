// frontend/src/api.ts

const API_URL = 'http://localhost:5000/api/loans';

// Submit a loan application to the backend
export const submitLoanApplication = async (loanData: any) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loanData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit loan application');
        }

        return await response.json();
    } catch (error) {
        console.error('submitLoanApplication error:', error);
        throw error;
    }
};

// Fetch all submitted loans from the backend
export const fetchLoans = async () => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Failed to fetch loans');
        }

        return await response.json();
    } catch (error) {
        console.error('fetchLoans error:', error);
        throw error;
    }
};
