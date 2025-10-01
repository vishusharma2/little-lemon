# Little Lemon Restaurant Booking System

A modern React-based web application for Little Lemon restaurant's table reservation system. This project provides an intuitive interface for customers to book tables at the Mediterranean restaurant.

## 🍋 About the Project

Little Lemon is a family-owned Mediterranean restaurant located in Chicago, focused on traditional recipes served with a modern twist. This booking system allows customers to easily reserve tables for various occasions including birthdays, anniversaries, business meetings, and casual dining.

## ✨ Features

- **Interactive Booking Form**: Complete reservation form with date, time, guest count, and occasion selection
- **Responsive Design**: Modern, mobile-friendly interface
- **Time Management**: Dynamic time slot availability based on selected date
- **Form Validation**: Built-in validation for all booking fields
- **Accessibility**: ARIA labels and semantic HTML for screen reader compatibility
- **React Router**: Seamless navigation between different pages

## 🛠️ Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router DOM 6.6.2** - Client-side routing
- **React Testing Library** - Component testing
- **Jest** - Testing framework
- **CSS3** - Styling and responsive design

## 🧪 Testing

This project includes comprehensive test coverage using React Testing Library and Jest:

- **Component Testing**: Tests for all major components including Header, BookingForm, and App
- **User Interaction Testing**: Tests for form submissions, button clicks, and user events
- **Accessibility Testing**: Ensures proper ARIA labels and semantic structure
- **Integration Testing**: Tests the complete booking flow

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LittleLemon_Booking
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/
│   ├── Booking.js          # Main booking page component
│   ├── BookingForm.js      # Reservation form component
│   ├── ConfirmedBooking.js # Booking confirmation component
│   ├── Footer.js           # Footer component
│   ├── Header.js           # Hero section with restaurant info
│   ├── Main.js             # Main content wrapper
│   └── Nav.js              # Navigation component
├── images/                 # Restaurant images and logos
├── App.js                  # Main application component
├── App.css                 # Global styles
├── App.test.js            # Main application tests
└── index.js               # Application entry point
```

## 🎯 Key Components

- **Header**: Hero section with restaurant description and reservation button
- **BookingForm**: Interactive form for table reservations with validation
- **ConfirmedBooking**: Success page after booking completion
- **Navigation**: Responsive navigation menu

## 🔧 Development

The project uses Create React App for development and build tooling. All components are built with modern React patterns including hooks for state management.

## 📝 License

This project is part of a learning exercise and is for educational purposes.

---

**Little Lemon Restaurant** - Bringing Mediterranean flavors to Chicago since 2023
