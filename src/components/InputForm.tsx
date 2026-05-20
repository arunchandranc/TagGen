import React, { useEffect, useState } from 'react';
import { RegexDefinition, ValidationResult } from '../types';
import { validateInput } from '../utils/validator';

type InputFormProps = {
  inputTitle: string;
  onInputChange: (title: string) => void;
  onValidate: (results: ValidationResult[]) => void;
  regexDefinitions: RegexDefinition[];
};

const InputForm: React.FC<InputFormProps> = ({
  inputTitle,
  onInputChange,
  onValidate,
  regexDefinitions,
}) => {
  const [inputValue, setInputValue] = useState(inputTitle);

  useEffect(() => {
    setInputValue(inputTitle);
  }, [inputTitle]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  const handleValidate = () => {
    const results = validateInput(inputValue, regexDefinitions);
    onValidate(results);
  };

  const canValidate = inputValue.length >= 5;

  return (
    <div className="input-form">
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter title text"
        maxLength={200}
        rows={4}
      />
      <button type="button" onClick={handleValidate} disabled={!canValidate}>
        Validate
      </button>
      {inputValue.length > 0 && inputValue.length < 5 && (
        <p style={{ color: '#555', marginTop: '0.75rem' }}>
          Enter at least 5 characters to validate.
        </p>
      )}
    </div>
  );
};

export default InputForm;