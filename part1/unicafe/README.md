# Courseinfo - Full Stack Open 2023

This project is part of the Full Stack Open 2023 course, specifically the exercise from Part 1. It is a simple React application designed to manage and display course information. The project is focused on understanding the basics of React, component-based architecture, and props handling.

## Table of Contents

   1. [Overview](#overview)
   2. [Prerequisites](#prerequisites)
   3. [Installation](#installation)
   4. [Usage](#usage)
   5. [Key Concepts](#key-concepts)
   6. [License](#license)

## Overview

The **unicafe** project is a React application that allows users to give feedback on a café by rating it with various metrics (good, neutral, bad). It then displays the collected feedback and computes simple statistics based on the ratings. 

The key objectives of this project are:

   * Learning how to manage state in React components.
   * Handling user inputs and events.
   * Displaying dynamic content based on user interactions.

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
   cd full-stack-open-2023/part1/unicafe
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

## Key Concepts

  * **State Management:** The app utilizes React's **useState** hook to manage the state of feedback ratings and statistics.

  * **Event Handling:** User interactions (such as button clicks) are managed using event handlers, which update the state accordingly.

  * **Dynamic Rendering:** The application dynamically renders content based on the current state, allowing users to see updated statistics as they interact with the app.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](https://github.com/lasanthamudalige/full-stack-open-2023/blob/main/LICENSE) file.

<!-- This is to add horizontal line -->
---

This project is a hands-on exercise in managing state and handling user input in React. It's an excellent introduction to building interactive user interfaces with React.
