import React from 'react';
import { ValidationResult } from '../types';

const ResultsTable: React.FC<{ results: ValidationResult[] }> = ({ results }) => {
    return (
        <table className="results-table">
            <thead>
                <tr>
                    <th>Sl. No</th>
                    <th>Regex</th>
                    <th>Pass/Fail</th>
                    <th>Tags</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{result.regexName}</td>
                        <td className={result.status === 'Pass' ? 'pass-cell' : 'fail-cell'}>
                            {result.status}
                        </td>
                        <td>{result.generatedTags.join(', ')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ResultsTable;