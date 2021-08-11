import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "../assets/CLASSFINder.png";

const Submit = React.memo(() => {
  const [classes, setClasses] = useState([]);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const arrayOfSelects = [
      e.target["period-1"].value,
      e.target["period-2"].value,
      e.target["period-3"].value,
      e.target["period-4"].value,
      e.target["period-5"].value,
      e.target["period-6"].value,
      e.target["period-7"].value,
    ];
    localStorage.setItem("arrayOfSelects", JSON.stringify(arrayOfSelects));
    localStorage.setItem("studentName", name);

    axios
      .post(process.env.REACT_APP_URL + "/submit", {
        name: name,
        classes: arrayOfSelects,
      })
      .then((response) => {
        setData([...data, ...response.data.data]);
        setSubmitted(true);
        console.log(response.data.data);
        localStorage.setItem("studentData", JSON.stringify(response.data.data));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        const studentData = localStorage.getItem("studentData");

        if (studentData !== undefined) {
          setLoading(false);
        }
      });
  };

  // eslint-disable-next-line no-unused-vars
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // eslint-disable-next-line no-unused-vars

  const handleUpdate = (e) => {
    const arrayOfSelects = JSON.parse(localStorage.getItem("arrayOfSelects"));
    const studentName = localStorage.getItem("studentName");
    axios
      .post(process.env.REACT_APP_URL + "/update", {
        name: studentName,
        classes: arrayOfSelects,
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

        setData(JSON.parse(studentData));
        setDataLoaded(true);

        setLoading(false);
      });
  };

  useEffect(() => {
    const studentData = localStorage.getItem("studentData");
    console.log(studentData);
    if (studentData && !submitted && !dataLoaded) {
      setData([...data, ...JSON.parse(studentData)]);
      setDataLoaded(true);
      console.log(data);
      setLoading(false);
    }
    const fetchData = async () => {
      const data = await axios.get(process.env.REACT_APP_URL + "/classes");
      setClasses([...classes, ...data.data]);
    };
    fetchData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dark:bg-gray-900 bg-white pb-32">
      {!loading ? (
        <>
          {data?.map((elem, idx) => (
            <>
              <h1>{elem.className}</h1>
              <table
                key={idx}
                className="flex flex-col md:justify-start md:items-baseline border-2 border-black text-white"
              >
                <tbody>
                  <tr>
                    <th>Classes</th>
                  </tr>

                  {elem.students.map((elem, idx) => (
                    <tr key={idx}>{elem}</tr>
                  ))}
                </tbody>
              </table>
            </>
          ))}
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-start items-center h-50 pt-10 ">
            <img
              src={logo}
              alt="logo"
              className="rounded-3xl border-4 border-black"
              width="150vh"
              height="150vh"
            />
          </div>
          <h1 className="flex justify-center items-top dark:text-white text-black text-3xl pt-5 font-mono ">
            Input your classes{" "}
          </h1>
          <p className="flex justify-center items-top text-sm mb-5 dark:text-white text-black ">
            (There are only 7 periods to fill in)
          </p>
          <div className="flex flex-row justify-center items-top h-screen dark:text-white pb-12 px-10 text-2xl font-mono">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col  h-screen  w-full md:w-3/4  "
            >
              <label>Full name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="text-black rounded-xl border-2 border-purple-600 bg-gradient-to-br mt-2 mb-2"
                value={name}
                onChange={handleNameChange}
              />

              <label>First Period</label>
              <select
                name="period-1"
                className="text-black rounded-xl border-2 border-purple-600 bg-gradient-to-br mt-2 mb-2"
              >
                {classes.map((elem, idx) => (
                  <option key={idx} value={elem}>
                    {" "}
                    {elem}{" "}
                  </option>
                ))}
              </select>

              <label>Second Period</label>
              <select
                name="period-2"
                className="text-black rounded-xl border-2 border-purple-600 bg-gradient-to-br mt-2 mb-2"
              >
                {classes.map((elem, idx) => (
                  <option key={idx}> {elem} </option>
                ))}
              </select>
              <label>Third Period</label>
              <select
                name="period-3"
                className="text-black rounded-xl border-2 border-purple-600 bg-gradient-to-br mt-2 mb-2"
              >
                {classes.map((elem, idx) => (
                  <option key={idx}> {elem} </option>
                ))}
              </select>
              <label>Fourth Period</label>
              <select
                name="period-4"
                className="text-black rounded-xl border-2 border-purple-600 bg-gradient-to-br mt-2 mb-2"
              >
                {classes.map((elem, idx) => (
                  <option key={idx}> {elem} </option>
                ))}
              </select>
              <label>Fifth Period</label>
              <select
                name="period-5"
                className="text-black rounded-xl border-2 border-purple-600 bg-gradient-to-br mt-2 mb-2"
              >
                {classes.map((elem, idx) => (
                  <option key={idx}> {elem} </option>
                ))}
              </select>
              <label>Sixth Period</label>
              <select
                name="period-6"
                className="text-black rounded-xl border-2 border-purple-600 bg-gradient-to-br mt-2 mb-2"
              >
                {classes.map((elem, idx) => (
                  <option key={idx}> {elem} </option>
                ))}
              </select>
              <label>Seventh Period</label>
              <select
                name="period-7"
                className="text-black rounded-xl border-2 border-purple-600 bg-gradient-to-br mt-2 mb-5"
              >
                {classes.map((elem, idx) => (
                  <option key={idx}> {elem} </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-gradient-to-br bg-pink-900 hover:bg-purple-800 text-white  text-2xl md:w-1/4 w-full rounded-xl border border-white font-mono font-bold mb-10"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
});

export default Submit;
