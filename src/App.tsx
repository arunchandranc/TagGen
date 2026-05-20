import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultsTable';
import regexDefinitions from './data/regexes.json';
import './styles/App.css';

const App: React.FC = () => {
    const [inputTitle, setInputTitle] = useState<string>('');
    const [validationResults, setValidationResults] = useState<any[]>([]);

    const handleInputChange = (title: string) => {
        setInputTitle(title);
    };

    const handleValidationResults = (results: any[]) => {
        setValidationResults(results);
    };

    return (
        <div className="app-container">
            <h1>TagGen</h1>
            <InputForm
                inputTitle={inputTitle}
                onInputChange={handleInputChange}
                onValidate={handleValidationResults}
                regexDefinitions={regexDefinitions}
            />
            {validationResults.length > 0 && (
                <div className="results-container">
                    <div className="input-display">
                        <strong>Input:</strong> {inputTitle}
                    </div>
                    <ResultsTable results={validationResults} />
                </div>
            )}
        </div>
    );
};

export default App;