# Book Club v2

Welcome to the Book Club application! This project is built using Django Rest Framework (DRF) for the backend and Next.js for the frontend. The main features include user registration, login, and book management functionalities.

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.8+
- Node.js 14+
- PostgreSQL
- Poetry (for managing Python dependencies)

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/bookclub.git
    cd bookclub
    ```

2. Create a virtual environment and activate it:

    ```bash
    poetry shell
    ```

3. Install the dependencies:

    ```bash
    poetry install
    ```

4. Create a `.env` file in the backend directory and add your PostgreSQL database configuration:

    ```env
    SECRET_KEY=your_secret_key
    DATABASE_URL=postgresql://bookclubuser:password@localhost:5432/bookclub
    ```

5. Run the migrations:

    ```bash
    python manage.py migrate
    ```

6. Create a superuser:

    ```bash
    python manage.py createsuperuser
    ```

7. Start the backend server:

    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env.local` file in the frontend directory and add your API URL:

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
    ```

4. Start the frontend development server:

    ```bash
    npm run dev
    ```

## Features

- **User Registration:** Users can register for an account.
- **User Login:** Registered users can log in.
- **Book Management:** Logged-in users can add and view books.
- **Homepage:** Non-logged-in users can see a welcoming message with options to register or log in.

## Usage

- Visit the homepage at `http://localhost:3000/` to register or log in.
- After logging in, users can add and manage books.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the Book Club application! If you have any questions or suggestions, feel free to open an issue or reach out to us.
