# Countries - Full Stack Open 2023

The Countries project is part of the Full Stack Open 2023 course, specifically from Part 2. It is a React application that allows users to search for and view information about countries. The project demonstrates handling asynchronous data fetching and managing complex states in React applications.

## Table of Contents

   1. [About the Project](#about-the-project)
   2. [Prerequisites](#prerequisites)
   3. [Installation](#installation)
   4. [Usage](#usage)
   5. [API Usage](#api-usage)
   6. [License](#license)

## About the Project

The Countries App demonstrates how to fetch data from external APIs and use React to render the data dynamically. The user can search for a country and view details such as:

   * Country name
   * Capital city
   * Population
   * Spoken languages
   * Current weather in the capital

The application integrates with the REST Countries API and OpenWeatherMap API to retrieve country and weather information.

### Main Features:

   * Search for countries by name.
   * Display detailed information about selected countries.
   * Fetch and display real-time weather data for the capital city of the selected country.

## Prerequisites

   * Node.js (version 14 or higher)

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

   4. IMPORTANT: You will need an API key from OpenWeatherMap for the weather information feature.

      After obtaining the API key, create a .env file in the project root and add the following:
   
      ```bash
      VITE_WEATHER_API_KEY=<Your_OpenWeatherMap_API_Key>
      ```

## Usage

1. To run the application locally:

      Start the development server:
   
      ```bash
      npm start dev
      ```

2. Open your browser and navigate to http://localhost:3000 or replace 3000 with your port to view the app.

## API Usage

This project makes use of two public APIs:

   1. REST Countries API: Provides detailed information about countries.
         
         * Documentation: https://restcountries.com/
   
   2. OpenWeatherMap API: Provides weather data for the capital cities.
        
        * Documentation: https://openweathermap.org/api

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](https://github.com/lasanthamudalige/full-stack-open-2023/blob/main/LICENSE) file.
