# DevAccelerator Hotel React Application

## Overview
This is a simple React application for the DevAccelerator Hotel. The application allows users to view available rooms, select a room, enter the number of days they wish to stay, and book the room. The application calculates the total price based on the selected room and the number of days.

## Features
- View a list of available rooms with different types and prices.
- Select a room to see the total price for a specified number of days.
- Book the selected room and receive a confirmation message.

## Components
- `App.js`: Main component that holds the application state and logic.
- `RoomList.js`: Component that renders a list of available rooms.
- `Room.js`: Component that renders individual room details.

## Tech Stack
- **Frontend**: React, JavaScript, JSX
- **Styling**: CSS
- **Tools**: Create React App, npm

## Getting Started

### Prerequisites
- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/devaccelerator-hotel.git

2. Navigate to the project directory:

    cd devaccelerator-hotel

3. Install the dependencies:

    npm start


This will launch the app in your default browser. You should see the DevAccelerator Hotel application where you can select a room, input the number of days, and see the total price.

Project Structure

devaccelerator-hotel/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Room.js
│   │   ├── RoomList.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
├── .gitignore
├── package.json
└── README.md
