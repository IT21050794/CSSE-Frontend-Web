import React, { useState } from "react";
import Swal from "sweetalert2";
import "./AddBusRoute.css";
import ContainerFrame from "../components/ContainerFrame";
import { ref, push } from "firebase/database";
import { db } from "../firebase/config"; 

export default function AddBusRoute() {
  const [busRoute, setBusRoute] = useState("");
  const [busCategory, setBusCategory] = useState("");
  const [totalBuses, setTotalBuses] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const data = {
      busRoute: busRoute,
      busCategory: busCategory,
      totalBuses: totalBuses,
      seatingCapacity: seatingCapacity,
    };

    // Push data to the Firebase Realtime Database
    const newBusRouteRef = push(ref(db, `bus-routes/`), data);

    // Get the unique key (ID) of the newly added data
    const newBusRouteKey = newBusRouteRef.key;

    Swal.fire({
      icon: "success",
      title: "Successful...",
      text: "Added Successfully !!",
      footer: '<a href="/view-routes">Go to View Bus Routes</a>',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/view-routes";
      }
    });
  }

  return (
    <>
      <section className="h-screen w-4/5">
        <ContainerFrame />
        <div className="container">
          <div className="form-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/397/368/original/employee-working-concepts-vector.jpg"
              alt="Sample image"
              className="sample-image"
            />
            <div className="form">
              <h2 className="form-title">Add Bus Route</h2>
              <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                  <label htmlFor="busRoute" className="form-label">
                    Bus Route
                  </label>
                  <input
                    type="text"
                    id="busRoute"
                    className="form-input"
                    placeholder="Bus Route"
                    value={busRoute}
                    onChange={(e) => setBusRoute(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="busCategory" className="form-label">
                    Bus Category
                  </label>
                  <input
                    type="text"
                    id="busCategory"
                    className="form-input"
                    placeholder="Bus Category"
                    value={busCategory}
                    onChange={(e) => setBusCategory(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="totalBuses" className="form-label">
                    Total Buses
                  </label>
                  <input
                    type="number"
                    id="totalBuses"
                    className="form-input"
                    placeholder="Total Buses"
                    value={totalBuses}
                    onChange={(e) => setTotalBuses(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="seatingCapacity" className="form-label">
                    Seating Capacity
                  </label>
                  <input
                    id="seatingCapacity"
                    type="number"
                    className="form-input"
                    placeholder="Seating Capacity"
                    value={seatingCapacity}
                    onChange={(e) => setSeatingCapacity(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="submit-button">
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-10"></div>
    </>
  );
}
