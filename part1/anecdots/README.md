# Anecdotes - Full Stack Open 2023

This project is part of the Full Stack Open 2023 course, specifically from Part 1. It is a simple React application where users can vote on randomly displayed anecdotes. The project introduces React state management and event handling concepts.
Table of Contents

## Table of Contents

   1. [Overview](#overview)
   2. [Prerequisites](#prerequisites)
   3. [Installation](#installation)
   4. [Usage](#usage)
   5. [Project Structure](#project-structure)
   6. [Key Concepts](#key-concepts)
   7. [License](#license)

## Overview

The anecdotes project allows users to vote for their favorite anecdotes. Each time the app is loaded, it shows a random anecdote, and users can click a button to vote for it. The votes are stored in the app's state, and the anecdote with the highest number of votes is displayed separately.

Key objectives of this project are:

   * Managing component state using React's useState hook.
   * Updating and displaying state information dynamically.
   * Handling events such as button clicks to modify the app's state.

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
   cd full-stack-open-2023/part1/anecdots
   ```

   3. Install dependencies:

   If you are using npm:
   ```bash
   npm install
   ```

   Or, if you are using yarn:
   ```bash
   yarn install
   ```

## Usage

1. To run the application locally:

    Start the development server:

    ```bash
   npm start # or 'npm i'
   ```

   Or if using yarn:
   ```bash
    yarn start
   ```

2. Open your browser and navigate to http://localhost:3000 to view the app.

## Project Structure

The structure of the project is as follows:

```bash
anecdots/
│
├── public/                 # Static files
├── src/                    # Source files
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the app
│   └── components/         # Folder for reusable components
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Key Concepts

   * **State Management:** The app uses React's useState hook to manage the votes and the currently displayed anecdote.

   * **Event Handling:** Button click events are handled to increment the vote count and to change the displayed anecdote.

   * **Conditional Rendering:** The app displays a message when there are no votes yet and dynamically updates the anecdote with the most votes.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](https://github.com/lasanthamudalige/full-stack-open-2023/blob/main/LICENSE) file.

<!-- This is to add horizontal line -->
---

The anecdotes project is a simple and interactive way to understand core React concepts like state, props, and event handling. It's part of the foundational exercises in the Full Stack Open 2023 curriculum.
