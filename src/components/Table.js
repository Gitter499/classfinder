import React, { useEffect, useState } from "react";
import axios from "axios";

const DataTable = ({ data }) => {
  const [tableData, setTableData] = useState([]);

  const handleUpdate = (e) => {
    const classes = JSON.parse(localStorage.getItem("classesDeclaredByUser"));
    const studentName = localStorage.getItem("studentName");

    axios
      .post(process.env.REACT_APP_URL + "/update", {
        name: studentName,
        classes: classes,
      })
      .then((response) => {
        console.log(response.data.data);
        localStorage.setItem("studentData", JSON.stringify(response.data.data));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        const studentData = localStorage.getItem("studentData");
        if (!studentData) {
          alert("An error occured! Please refresh the page");
        }
        setTableData(JSON.parse(studentData));
      });

  };
  useEffect(() => {
   
      setTableData(data);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-cols justify-center items-center w-3/4 dark:bg-gray-900 bg-white md:justify-start md:items-center md:w-1/2">
      <h1 className="text-center text-2xl font-mono dark:text-white text-black  py-4 px-4 ">
        Your Future Classmates! 🎉
      </h1>
      <p className=" ">Press the update button to update the status</p>
      {tableData.map((elem, idx) => (
        <div
          key={idx}
          className="font-mono border-4 rounded-lg dark:text-white text-black hover:scale-110"
        >
          <div>
            <h2>Class: {elem.className}</h2>
          </div>
          <ul>
            {elem.students.map((student, idx) => (
              <li key={idx}>{student}</li>
            ))}
          </ul>
        </div>
      ))}
      <button
        onClick={handleUpdate}
        className="bg-blue-600 hover:bg-blue-900 text-white  text-2xl py-2 px-4 rounded-xl border border-white"
      >
        Update
      </button>
    </div>
  );
};

export default DataTable;
