import React from 'react';
import Room from './Room';

function RoomList({ rooms, onRoomSelect }) {
  return (
    <div>
      <h2>Rooms</h2>
      {rooms.map((room) => (
        <Room key={room.id} room={room} onRoomSelect={onRoomSelect} />
      ))}
    </div>
  );
}

export default RoomList;
