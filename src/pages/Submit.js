import React from "react";


const Submit = () => {


  return (
    <div className="dark:bg-gray-900 bg-white">
      <h1 className="flex justify-center items-top dark:text-white text-black text-3xl pt-5 font-mono ">
        Input your classes{" "}
      </h1>
      <p className="flex justify-center items-top text-sm mb-5 dark:text-white text-black ">
        (There are only 7 periods to fill in)
      </p>
      <div className="flex flex-row justify-center items-center h-screen dark:text-white">
        <form>
          <label>First Period</label>
          
        </form>
      </div>
    </div>
  );
};

export default Submit;
