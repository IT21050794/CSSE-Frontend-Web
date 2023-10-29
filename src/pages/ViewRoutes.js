import { Button, Radio, FormControlLabel } from "@mui/material";
import ContainerFrame from "../components/ContainerFrame";
import RecordAllRoutes from "../components/RecordAllRoutes";
import "./RouteSummery.css";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./ViewRoutes.css";
import { ref, get } from "firebase/database";
import { db } from "../firebase/config";

const ViewRoutes = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Define the database reference
    const recordsRef = ref(db, `bus-routes/`);

    // Fetch data from the database
    get(recordsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Convert the data to an array
          const data = [];
          snapshot.forEach((childSnapshot) => {
            data.push({ id: childSnapshot.key, ...childSnapshot.val() });
          });
          setRecords(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function recordList() {
    return records.map((record) => {
      return (
        <RecordAllRoutes
          record={record}
          deleteRecord={() => deleteRecord(record.id)}
          key={record.id}
        />
      );
    });
  }

  //   async function deleteRecord(id) {
  //     const swalWithBootstrapButtons = Swal.mixin({
  //       customClass: {
  //         confirmButton: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ',
  //         cancelButton: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
  //       },
  //       buttonsStyling: false
  //     })

  //     swalWithBootstrapButtons.fire({
  //       title: 'Are you sure?',
  //       text: "You won't be able to revert this! You will the Delete the This Employee Profile!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Yes, delete it!',
  //       cancelButtonText: 'No, cancel!',
  //       reverseButtons: true
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(`http://localhost:5007/api/Employee/${id}`, {
  //           method: "DELETE"
  //         }).then((d)=>{

  //         swalWithBootstrapButtons.fire(
  //           'Deleted!',
  //           'This Employee Profile has been deleted.',
  //           'success'

  //         )
  //           setRecords();
  //         });
  //       } else if (
  //         /* Read more about handling dismissals below */
  //         result.dismiss === Swal.DismissReason.cancel
  //       ) {
  //         swalWithBootstrapButtons.fire(
  //           'Cancelled',
  //           'This Employee is Not Deleted:)',
  //           'info'
  //         )
  //       }
  //     })
  //   }

  return (
    <div className="route-summery">
      <ContainerFrame />
      <section className="frame">
        <div className="frame1">
          <header className="top-bar">
            <div className="languange">
              <div className="text">
                <img className="united-icon" alt="" src="/united.svg" />
                <div className="eng-us">Eng (US)</div>
              </div>
              <img className="united-icon" alt="" src="/chevrondown.svg" />
            </div>
            <div className="menu">
              <div className="rectangle-parent">
                <img
                  className="frame-child"
                  alt=""
                  src="/rectangle-1393@2x.png"
                />
                <div className="group-parent">
                  <img className="frame-item" alt="" src="/group-21861.svg" />
                  <div className="admin">Admin</div>
                  <div className="tharindu">Tharindu</div>
                </div>
              </div>
              <img
                className="notifications-icon"
                alt=""
                src="/notifications.svg"
              />
            </div>
            <div className="route-summery1">Route Summery</div>
          </header>
        </div>
        <div className="todays-trends">
          <div className="cards-default" />
          <b className="todays-trends-of">Currently Available Bus Routes</b>
          <div className="as-of-25">as of 19 October 2023</div>

          <div className="emplist">{recordList()}</div>
        </div>
      </section>
    </div>
  );
};

export default ViewRoutes;
