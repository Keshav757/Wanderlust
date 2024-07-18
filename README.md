# Wanderlust

Wanderlust is a web application designed to facilitate vacation rental listings, similar to Airbnb. The platform allows users to list, search, and manage vacation rentals with ease, offering a seamless experience for both hosts and guests.

## Features

- **Listing Management**: Users can create, edit, view, and delete property listings with detailed descriptions, images, and pricing information.
- **Search and Filter**: Robust search functionality to help users find properties by location, price, and other criteria.
- **Responsive Design**: Fully responsive and accessible on various devices, enhancing user engagement and satisfaction.
- **Data Management**: Utilizes MongoDB for efficient data storage and retrieval, ensuring fast and reliable performance.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: EJS, HTML, CSS, JavaScript
- **Database**: MongoDB

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/wanderlust.git
    cd wanderlust
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up MongoDB:**
    Make sure you have MongoDB installed and running. You can use the default local MongoDB URI:
    ```plaintext
    mongodb://localhost:27017/wanderlust
    ```

4. **Start the application:**
    ```bash
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

## Usage

- Navigate to `http://localhost:3000` in your web browser.
- Use the navigation bar to access different features like creating new listings, viewing listings, and editing or deleting listings.

## Project Structure

- `models/`: Contains the Mongoose schema for the listings.
- `public/`: Contains static files like CSS and JavaScript.
- `views/`: Contains EJS templates for rendering the frontend.
- `routes/`: Contains route definitions for different parts of the application.
- `app.js`: The main application file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspiration from Airbnb.
- Images from Unsplash.

