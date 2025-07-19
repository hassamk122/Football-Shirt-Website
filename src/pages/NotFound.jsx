import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
      <main className='min-h-screen'>
      <div className="m-40 text-center">
        <h1 className="font-Poppins font-bold text-[#2f7eff] text-9xl text-center ">
          404
        </h1>
        <h1 className="font-Poppins font-bold text-[#2f7eff] text-5xl text-center">
          Page Not Found
        </h1>
        <Link to="/" className="font-Dm-Sans  text-gray-700  text-sm text-center underline  hover:text-black  cursor-pointer ">
          Go back to home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
