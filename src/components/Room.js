import React from 'react';

function Room({ room, onRoomSelect }) {
  return (
    <div onClick={() => onRoomSelect(room)}>
      <h3>{room.type}</h3>
      <p>Price per night: ${room.price}</p>
    </div>
  );
}

export default Room;
