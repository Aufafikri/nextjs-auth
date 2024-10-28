import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-teal-700 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Authentication</h1>
      <div>
        <div className="flex gap-4">
          <Link href={"/register"} className="p-2 border rounded-lg text-white hover:bg-slate-50 hover:border-slate-50 hover:text-gray-950 font-bold">Sign Up</Link>
          <Link href={"/login"} className="p-2 border rounded-lg text-white hover:bg-orange-400 hover:border-orange-400 hover:text-gray-950 font-bold">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
