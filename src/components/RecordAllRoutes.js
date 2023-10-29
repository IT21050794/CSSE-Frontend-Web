import React from "react";
import "./RecordAllRoutes.css"; // Import the CSS file

function RecordAllRoutes(props) {
  return (
    <div className="record-card">
      <p>Bus Route: {props.record.busRoute}</p>
      <p>Bus Category: {props.record.busCategory}</p>
      <p>Total Buses: {props.record.totalBuses}</p>
      <p>Seating Capacity: {props.record.seatingCapacity}</p>
      <div className="button-container">
        <a href={`/update/${props.record.id}`}>
          <button className="edit-button">Edit</button>
        </a>
        <button
          onClick={() => {
            props.deleteRecord(props.record.id);
          }}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default RecordAllRoutes;
