import React, { useState } from 'react';
import RoomList from './components/RoomList';
import './App.css';

function App() {
  const [rooms] = useState([
    { id: 1, type: 'Single', price: 50 },
    { id: 2, type: 'Double', price: 75 },
    { id: 3, type: 'Suite', price: 100 },
  ]);

  const [days, setDays] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isBooked, setIsBooked] = useState(false);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setTotalPrice(room.price * days);
    setIsBooked(false);
  };

  const handleDaysChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setDays(value);
    if (selectedRoom) {
      setTotalPrice(selectedRoom.price * value);
    }
  };

  const handleBooking = () => {
    setIsBooked(true);
    alert(`Room booked successfully for ${days} day(s)! Total Price: $${totalPrice}`);
  };

  return (
    <div className="App">
      <h1>DevAccelerator Hotel</h1>
      <label>
        Number of Days:
        <input type="number" value={days} onChange={handleDaysChange} />
      </label>
      <RoomList rooms={rooms} onRoomSelect={handleRoomSelect} />
      {selectedRoom && (
        <div>
          <h2>Selected Room: {selectedRoom.type}</h2>
          <h3>Total Price: ${totalPrice}</h3>
          <button onClick={handleBooking}>Book Now</button>
          {isBooked && <p>Room booked successfully!</p>}
        </div>
      )}
    </div>
  );
}

export default App;
