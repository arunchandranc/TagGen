# TagGen

TagGen is a web-based application designed to validate user input against a set of regular expressions and generate relevant tags based on the matches. The application allows users to upload a file containing regular expressions, which are then used to test the input provided by the user.

## Features

- Input validation against multiple regular expressions.
- Generation of tags based on matched regular expressions.
- User-friendly interface with a text area for input and a results table for displaying validation outcomes.
- Ability to upload a file containing regular expressions with associated names and tags.

## Project Structure

```
TagGen
├── src
│   ├── components
│   │   ├── InputForm.tsx        # Component for user input and validation button
│   │   ├── ResultsTable.tsx     # Component for displaying validation results
│   │   └── RegexUploader.tsx     # Component for uploading regex definitions
│   ├── types
│   │   └── index.ts              # TypeScript interfaces for regex and validation results
│   ├── utils
│   │   └── validator.ts          # Utility functions for input validation
│   ├── styles
│   │   └── App.css               # CSS styles for the application
│   ├── App.tsx                   # Main application component
│   └── index.tsx                 # Entry point of the React application
├── public
│   └── index.html                # Main HTML file for the application
├── package.json                  # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/TagGen.git
   ```
2. Navigate to the project directory:
   ```
   cd TagGen
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Enter your input in the text area and click the "Validate" button.
4. Upload a file containing regular expressions to test against the input.
5. View the results displayed in the table below the input fields.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.