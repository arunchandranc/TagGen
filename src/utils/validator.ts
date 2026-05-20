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

const normalizePattern = (pattern: string): { source: string; flags: string } => {
    const inlineFlags = pattern.match(/^\(\?([gimsuy]+)\)/);
    if (!inlineFlags) {
        return { source: pattern, flags: '' };
    }

    return {
        source: pattern.slice(inlineFlags[0].length),
        flags: inlineFlags[1],
    };
};

export function validateInput(input: string, regexDefinitions: RegexDefinition[]): ValidationResult[] {
    return regexDefinitions.map(({ name, pattern, tags }) => {
        let status: 'Pass' | 'Fail' = 'Fail';
        let generatedTags: string[] = [];

        try {
            const { source, flags } = normalizePattern(pattern);
            const regex = new RegExp(source, flags);
            const isMatch = regex.test(input);

            if (isMatch) {
                status = 'Pass';
                generatedTags = tags;
            }
        } catch (error) {
            console.warn('Invalid regex pattern:', pattern, error);
        }

        return {
            inputTitle: input,
            regexName: name,
            status,
            generatedTags,
        };
    });
}
