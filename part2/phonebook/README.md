# Phonebook App (Part 2 - Full Stack Open 2023)

This project is part of the **Full Stack Open 2023** course, specifically from Part 2. The **Phonebook App** is a React application that allows users to store, manage, and search contact information (names and phone numbers). It demonstrates the integration of a frontend with a backend server, handling forms, and managing application state.

## Table of Contents

   1. [About the Project](#about-the-project)
   2. [Prerequisites](#prerequisites)
   3. [Installation](#installation)
   4. [Usage](#usage)
   5. [License](#license)

## About the Project

The **Phonebook App** demonstrates how to build a React application that interacts with a backend server. 

### Main Features:

  * Add new contacts (name and phone number).
  * Update existing contacts (e.g., change a phone number).
  * Delete contacts from the phonebook.
  * Search and filter contacts.
  * Data persistence with a backend server.

### Key Concepts:

  * Handling form inputs and user interactions in React.
  * Fetching and updating data using axios.
  * Communicating with a RESTful backend API.

## Prerequisites

   * Node.js (version 18 or higher)

Ensure that you have these installed before proceeding.

## Installation

   1. Clone the repository:
   ```bash
   git clone https://github.com/lasanthamudalige/full-stack-open-2023.git
   ```

   2. Navigate to the project directory:
   ```bash
   cd full-stack-open-2023/part2/phonebook
   ```

   3. Install dependencies:

        If you are using npm:
        ```bash
        npm install # or 'npm i'
        ```

   4. Install [JSON Server](https://github.com/typicode/json-server)
      ```bash
      npm install -g json-server
      ```

## Usage

1. To run the application locally:

   1. Start the JSON Server:
      ```bash
      npm start server
      ```

   2. Start the development server:
      ```bash
      npm start dev
      ```

3. Open your browser and navigate to http://localhost:3000 or replace 3000 with your port to view the app.

4. To check all available **scripts,** check the **package.json** file. 

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](https://github.com/lasanthamudalige/full-stack-open-2023/blob/main/LICENSE) file.
