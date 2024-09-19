# Countries - Full Stack Open 2023

The Countries project is part of the Full Stack Open 2023 course, specifically from Part 2. It is a React application that allows users to search for and view information about countries. The project demonstrates handling asynchronous data fetching and managing complex states in React applications.

## Table of Contents

   1. [Overview](#overview)
   2. [Prerequisites](#prerequisites)
   3. [Installation](#installation)
   4. [Usage](#usage)
   5. [Key Concepts](#key-concepts)
   6. [License](#license)

## Overview

The **countries** project is a React application designed to fetch and display information about countries based on user search input.

The key objectives of this project are:

  * Searching for countries by name.
  * Displaying detailed information about selected countries.
  * Handling asynchronous data fetching from a REST API.

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
   cd full-stack-open-2023/part1/countries
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
   npm start dev
   ```

   Or if using yarn:
   ```bash
    yarn start dev
   ```

2. Open your browser and navigate to http://localhost:3000 or replace 3000 with your port to view the app.

## Key Concepts

  * **Asynchronous Data Fetching:** The app fetches data from a REST API to display information about countries. This involves handling promises and managing async operations in React.

  * **State Management:** Utilizes React's useState and useEffect hooks to manage and update the application state based on user input and API responses.

  * **Conditional Rendering:** Displays different UI elements based on the current state, such as showing a list of countries or detailed information about a selected country.

  * **Event Handling:** Handles user interactions, such as searching for a country and selecting a specific country to view more details.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](https://github.com/lasanthamudalige/full-stack-open-2023/blob/main/LICENSE) file.
