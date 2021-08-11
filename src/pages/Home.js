import { Link } from "react-router-dom";

import logo from "../assets/CLASSFINder.png";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Link
        to="/auth/admin"
        className="flex justify-end items-end dark:text-white text-black font-mono mx-4 pt-4 hover:underline"
      >
        Admin
      </Link>
      <div className="flex flex-col justify-center items-center h-screen  text-black dark:text-white font-mono ">
        <img
          src={logo}
          alt="logo"
          className="rounded-3xl mb-20 border-4 border-black animate-bounce motion-safe:animate-spin"
          width="150vh"
          height="150vh"
        />
        <h1 className="text-2xl mx-5 text-center">
          Welcome to class finder! A utility to find your future class mates 🤗
        </h1>
        <p className="text-xs mx-5 text-center mt-3">
          (Psss... This tool only supports Central, but if you want to add your
          school, contact me)
        </p>
        <br />

        <Link
          to="/submit"
          className="bg-blue-600 hover:bg-blue-900 text-white  text-2xl py-2 px-4 rounded-xl border border-white disabled:opacity-50"
        >
          Proceed
        </Link>
      </div>
      <footer className="flex justify-center items-center dark:text-white text-black font-mono pb-5 ">
        Made by Rafayel &nbsp;
        <a
          href="http://insta.rafayel.codes"
          className="text-red-600 hover:underline "
        >
          @rafayel.19
        </a>
      </footer>
    </div>
  );
};

export default Home;
