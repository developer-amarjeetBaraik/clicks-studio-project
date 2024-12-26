
# Clicks Studio Website

This repository contains the source code for the Clicks Studio website, showcasing their services and work samples.

## Project Overview

The Clicks Studio website is a custom-built web application designed to highlight the client's portfolio and services. The website features a responsive design, API integrations, and a user-friendly interface.

## Technologies Used

- **Front-end:** React.js
- **Back-end:** Node.js, Express.js  
- **APIs:** Emailjs 
- **Database:** MongoDB  

## Getting Started

To get started with the project, follow these steps:

there are two parts of code 1. `Frontend` 2. `Backend`

### 1. Frontend

1. Clone the repository using:  
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:  
   ```bash
   cd <project-directory>
   ```

3. Nebigate to `Frontend` folder
   ```bash
   cd <project-directory>/Frontend
   ```
4. Install dependencies:  
   ```bash
   npm install
   ```
   or  
   ```bash
   yarn install
   ```

5. To run the app
   ```bash
   npm run dev
   ```

### 2. Backend
1. Open a new terminal

2. Navigate to the project directory:  
   ```bash
   cd <project-directory>
   ```
3. Nebigate to `Backend` folder
   ```bash
   cd <project-directory>/Backend
   ```
4. Install dependencies:  
   ```bash
   npm install
   ```
   or  
   ```bash
   yarn install
   ```

5. Configure API keys and database credentials in the `.env` file.  
   ```
    // Create environment variable

    PORT = 3000
    USERNAME_FOR_DATABASE = // mongoDB database username.
    PASS_KEY_FOR_DATABASE = // mongoDB database password.
    PUBLIC_KEY_FOR_EMAIL = // Public key for your eamil tamplate in Eamiljs
    PRIVATE_KEY_FOR_EMAIL = // Private key for your eamil tamplate in Eamiljs
    SERVICE_ID = // Service id for your eamil tamplate in Eamiljs
    TEMPLATE_ID = // Template id for your eamil tamplate in Eamiljs
5. Start the development server:  
   ```bash
   npm start
   ```
   or  
   ```bash
   yarn start
   ```

## API Documentation

The website integrates the following APIs:

- **Emailjs API:** Used for Delivering eamil to the owner when the user submit contact form.

Refer to the respective [API documentation](https://www.emailjs.com/docs/) for detailed information on endpoints, parameters, and response formats.

## Customization and Modifications

To customize or modify the code for your own project:

1. Familiarize yourself with the code structure and API integrations.  
2. Update API keys and database credentials in the `.env` file.  
3. Modify the code as needed to suit your project requirements.  
4. Test the changes thoroughly to ensure compatibility and functionality.  

## Contributing

Contributions to the project are welcome! To contribute:

- **Report Bugs:** Use the issue tracker to report bugs.  
- **Suggest Features:** Propose new features or enhancements.  
- **Submit Pull Requests:** Make clear and concise commit messages when submitting pull requests.

## Authors

- [@developer-amarjeetBaraik](https://github.com/developer-amarjeetBaraik)

## License

This project is free to use you can use these code in your project