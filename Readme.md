# Expense Tracker Website

An advanced Expense Tracker application built with a full-stack approach using React and Node.js. This application allows users to efficiently manage their finances with the following features:

## Features

- **Add, Update, and Delete Transactions**: Manage income and expenses with ease.
- **Transaction History**: View a detailed history of all your transactions.
- **Categorized View**: Analyze your income and expenses by categories.
- **Graphical Representation**: Visualize your financial data through intuitive graphs.
- **Summary Section**: Quickly view total income and total expenses.

## Tech Stack

**Frontend**: React.js (with hooks and context for state management, chart libraries for graphs)

**Backend**: Node.js, Express.js (REST API design)

**Database**: MongoDB (for storing transactions)

**Additional Tools**: Chart.js (for graphs), Material-UI (for UI components)

---

## Installation

Follow the steps below to set up the project locally:

### Prerequisites

- Node.js and npm installed
- MongoDB database set up

### Steps

1. Clone the repository:

```bash
git clone https://github.com/codewithdevansh/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd frontend
npm install
```

3. Set up environment variables:

Create a `.env` file in the `backend` directory with the following variables:

```env
MONGO_URI=<your-mongodb-connection-string>
PORT=3000
```

4. Start the application:

#### Backend:

```bash
node app.js
```

#### Frontend:

```bash
npm start
```

5. Open your browser and visit `http://localhost:3000`.

---

## Usage

1. Navigate to the homepage and log in/sign up if authentication is implemented.
2. Use the dashboard to add income or expense entries.
3. View categorized insights and graphical data representations.
4. Analyze transaction history or edit/delete existing entries.

---






## Contributing

Contributions are welcome! Please create a pull request for any feature addition or bug fix.

---

## Contact

For any questions or suggestions, feel free to reach out:

- Email: <sahu.devansh02@gmail.com>
- GitHub: [@codewithdevansh](https://github.com/codewithdevansh)
