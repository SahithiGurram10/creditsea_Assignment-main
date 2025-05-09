// frontend/src/App.tsx

import React from 'react';
import LoanForm from './components/LoanForm';
import Dashboard from './components/Dashboard';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div>
            <h1>Loan Manager</h1>
            <LoanForm />
            <Dashboard />
        </div>
    );
};

export default App;
