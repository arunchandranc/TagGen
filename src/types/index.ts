export interface RegexDefinition {
    name: string;
    pattern: string;
    tags: string[];
}

export interface ValidationResult {
    inputTitle: string;
    regexName: string;
    status: 'Pass' | 'Fail';
    generatedTags: string[];
}