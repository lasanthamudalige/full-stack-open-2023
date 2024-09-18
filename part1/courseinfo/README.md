# Courseinfo - Full Stack Open 2023

This project is part of the Full Stack Open 2023 course, specifically the exercise from Part 1. It is a simple React application designed to manage and display course information. The project is focused on understanding the basics of React, component-based architecture, and props handling.

## Table of Contents

   1. [Overview](#overview)
   2. [Prerequisites](#prerequisites)
   3. [Installation](#installation)
   4. [Usage](#usage)
   5. [Project Structure](#project-structure)
   6. [Key Concepts](#key-concepts)
   7. [License](#license)

## Overview

The courseinfo project is a minimal React application that lists the modules of a course along with the number of exercises for each module. 

Key objectives of this project are:

   * Learning how to use React components.
   * Passing data between components using props.
   * Organizing data in a structured way.

## Prerequisites

   * Node.js (version 14 or higher)
   * npm or yarn package manager

Ensure that you have these installed before proceeding.

## Installation

   1. Clone the repository:
   ```bash
   git clone https://github.com/lasanthamudalige/full-stack-open-2023.git
   ```

   2. Navigate to the project directory:
   ```bash
   cd full-stack-open-2023/part1/courseinfo
   ```

   3. Install dependencies:

   If you are using npm:
   ```bash
   npm install # or 'npm i'
   ```

   Or, if you are using yarn:
   ```bash
   yarn install
   ```

## Usage

1. To run the application locally:

    Start the development server:

    ```bash
   npm start
   ```

   Or if using yarn:
   ```bash
    yarn start
   ```

2. Open your browser and navigate to http://localhost:3000 to view the app.

## Project Structure

The structure of the project is as follows:

```bash
courseinfo/
│
├── public/                 # Static files
├── src/                    # Source files
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the app
│   └── components/         # Folder for React components
│       ├── Header.js       # Component for rendering course header
│       ├── Content.js      # Component for rendering course content
│       └── Total.js        # Component for rendering total exercises
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Key Concepts

  * **Components:** The app is divided into multiple small components like Header, Content, and Total. Each component serves a specific function and together they create the full app.

  * **Props:** Data is passed from the parent component (App.js) to child components using props. This helps in making the components reusable and modular.

  * **JSX:** The project uses JSX (JavaScript XML) for rendering UI components. It allows writing HTML-like syntax directly in JavaScript.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](https://github.com/lasanthamudalige/full-stack-open-2023/blob/main/LICENSE) file.

<!-- This is to add horizontal line -->
---

This project is a foundational exercise in React and aims to reinforce key concepts related to component-based design. It’s a great starting point for anyone looking to dive into React.
